(function () {
  const allowedUser = "amy.he@wallacewang.ca";
  const passwordHash = "23f525651e03fc6ff3392f8574903ea336c1e3c35db73ce2532dbbd19a9839da";
  const sessionKey = "northbridge-marketing-auth-session";
  const backendTokenKey = "wfs-marketing-backend-token";
  const backendConfig = window.WFS_BACKEND_CONFIG || {};
  const sessionHours = 12;
  const isLoginPage = /(^|\/)login\.html$/.test(window.location.pathname);

  function pageName() {
    const name = window.location.pathname.split("/").pop();
    return name || "index.html";
  }

  function getSession() {
    try {
      return JSON.parse(localStorage.getItem(sessionKey) || "null");
    } catch (error) {
      return null;
    }
  }

  function isSignedIn() {
    const session = getSession();
    return Boolean(session && session.user === allowedUser && Number(session.expiresAt) > Date.now());
  }

  function redirectToLogin() {
    const next = encodeURIComponent(`${pageName()}${window.location.search}${window.location.hash}`);
    window.location.replace(`login.html?next=${next}`);
  }

  async function sha256(value) {
    const bytes = new TextEncoder().encode(value);
    const hash = await crypto.subtle.digest("SHA-256", bytes);
    return [...new Uint8Array(hash)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
  }

  function backendEnabled() {
    return Boolean(backendConfig.enabled && backendConfig.apiBaseUrl);
  }

  function apiUrl(path) {
    return `${backendConfig.apiBaseUrl.replace(/\/$/, "")}${path}`;
  }

  async function signIn(user, password) {
    const normalizedUser = String(user || "").trim().toLowerCase();
    if (backendEnabled()) {
      const response = await fetch(apiUrl("/api/login"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: normalizedUser, password: String(password || "") })
      });
      if (!response.ok) return false;
      const data = await response.json();
      if (!data.token) return false;
      localStorage.setItem(backendTokenKey, data.token);
      localStorage.setItem(
        sessionKey,
        JSON.stringify({
          user: allowedUser,
          expiresAt: Date.now() + sessionHours * 60 * 60 * 1000
        })
      );
      return true;
    }

    const enteredHash = await sha256(String(password || ""));
    if (normalizedUser !== allowedUser || enteredHash !== passwordHash) return false;
    localStorage.setItem(
      sessionKey,
      JSON.stringify({
        user: allowedUser,
        expiresAt: Date.now() + sessionHours * 60 * 60 * 1000
      })
    );
    return true;
  }

  function signOut() {
    localStorage.removeItem(sessionKey);
    localStorage.removeItem(backendTokenKey);
    window.location.href = "login.html";
  }

  function addLogoutButton() {
    const sidebar = document.querySelector(".sidebar");
    if (!sidebar || document.querySelector(".logout-btn")) return;
    const button = document.createElement("button");
    button.className = "logout-btn";
    button.type = "button";
    button.textContent = "退出登录";
    button.addEventListener("click", signOut);
    sidebar.appendChild(button);
  }

  window.NorthBridgeAuth = {
    signIn,
    signOut,
    isSignedIn
  };

  if (!isLoginPage && !isSignedIn()) {
    redirectToLogin();
    return;
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (!isLoginPage) {
      addLogoutButton();
      return;
    }

    const form = document.querySelector("#loginForm");
    const error = document.querySelector("#loginError");
    const userInput = document.querySelector("#loginUser");
    const passwordInput = document.querySelector("#loginPassword");
    if (!form || !error || !userInput || !passwordInput) return;

    if (isSignedIn()) {
      const next = new URLSearchParams(window.location.search).get("next") || "index.html";
      window.location.replace(next);
      return;
    }

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      error.textContent = "";
      const ok = await signIn(userInput.value, passwordInput.value);
      if (!ok) {
        error.textContent = "用户名或密码不正确";
        passwordInput.value = "";
        passwordInput.focus();
        return;
      }
      const next = new URLSearchParams(window.location.search).get("next") || "index.html";
      window.location.replace(next);
    });
  });
})();
