const crypto = require("crypto");
const fs = require("fs");
const http = require("http");
const path = require("path");

const port = Number(process.env.PORT || 8787);
const allowedOrigin = process.env.ALLOWED_ORIGIN || "*";
const appUser = process.env.APP_USER || "amy.he@wallacewang.ca";
const appPassword = process.env.APP_PASSWORD || "";
const tokenSecret = process.env.TOKEN_SECRET || crypto.randomBytes(32).toString("hex");
const dataDir = process.env.DATA_DIR || path.join(__dirname, "data");
const dataFile = path.join(dataDir, "marketing-data.json");
const tokenHours = 12;

function send(res, status, payload) {
  res.writeHead(status, {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS",
    "Content-Type": "application/json; charset=utf-8"
  });
  res.end(JSON.stringify(payload));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        req.destroy();
        reject(new Error("Request body too large"));
      }
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });
  });
}

function sign(value) {
  return crypto.createHmac("sha256", tokenSecret).update(value).digest("hex");
}

function createToken(user) {
  const expiresAt = Date.now() + tokenHours * 60 * 60 * 1000;
  const payload = Buffer.from(JSON.stringify({ user, expiresAt })).toString("base64url");
  return `${payload}.${sign(payload)}`;
}

function verifyToken(req) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  const [payload, signature] = token.split(".");
  if (!payload || !signature || sign(payload) !== signature) return false;
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    return data.user === appUser && Number(data.expiresAt) > Date.now();
  } catch (error) {
    return false;
  }
}

function readData() {
  if (!fs.existsSync(dataFile)) {
    return { accounts: null, optionLists: null };
  }
  return JSON.parse(fs.readFileSync(dataFile, "utf8"));
}

function writeData(data) {
  fs.mkdirSync(dataDir, { recursive: true });
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2), "utf8");
}

async function route(req, res) {
  if (req.method === "OPTIONS") {
    send(res, 204, {});
    return;
  }

  if (req.url === "/api/health" && req.method === "GET") {
    send(res, 200, { ok: true });
    return;
  }

  if (req.url === "/api/login" && req.method === "POST") {
    if (!appPassword) {
      send(res, 500, { error: "APP_PASSWORD is not configured on the backend." });
      return;
    }
    const body = await readBody(req);
    const user = String(body.user || "").trim().toLowerCase();
    const password = String(body.password || "");
    if (user !== appUser || password !== appPassword) {
      send(res, 401, { error: "Invalid username or password." });
      return;
    }
    send(res, 200, { token: createToken(user), expiresInHours: tokenHours });
    return;
  }

  if (!verifyToken(req)) {
    send(res, 401, { error: "Unauthorized." });
    return;
  }

  if (req.url === "/api/data" && req.method === "GET") {
    send(res, 200, readData());
    return;
  }

  if (req.url === "/api/data" && req.method === "PUT") {
    const body = await readBody(req);
    const nextData = {
      accounts: Array.isArray(body.accounts) ? body.accounts : null,
      optionLists: body.optionLists && typeof body.optionLists === "object" ? body.optionLists : null,
      updatedAt: new Date().toISOString()
    };
    writeData(nextData);
    send(res, 200, { ok: true, updatedAt: nextData.updatedAt });
    return;
  }

  send(res, 404, { error: "Not found." });
}

http
  .createServer((req, res) => {
    route(req, res).catch((error) => {
      console.error(error);
      send(res, 500, { error: "Server error." });
    });
  })
  .listen(port, () => {
    console.log(`WFS marketing backend listening on ${port}`);
  });
