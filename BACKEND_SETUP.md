# WFS Marketing Backend Setup

GitHub Pages cannot store shared account records by itself. To make every computer see the same account table, deploy the API backend in `server/` and then set `backend-config.js`.

## 1. Deploy The Backend

Deploy `server/` to a Node.js host such as Render, Railway, a VPS, or another internal server.

Required environment variables:

- `APP_USER`: login email, for example `amy.he@wallacewang.ca`
- `APP_PASSWORD`: backend login password
- `TOKEN_SECRET`: a long random string
- `ALLOWED_ORIGIN`: `https://amy202601-rose.github.io`
- `DATA_DIR`: optional persistent data directory

Start command:

```bash
npm start
```

## 2. Configure The Website

After the backend is deployed, edit `backend-config.js`:

```js
window.WFS_BACKEND_CONFIG = {
  enabled: true,
  apiBaseUrl: "https://your-backend-domain.example"
};
```

Then push the website to GitHub.

## 3. How Data Sync Works

- If backend is disabled, the website keeps using browser `localStorage`.
- If backend is enabled and cloud data exists, the account table loads from the backend.
- If backend is enabled and cloud data is empty, the first browser that opens the site seeds the backend with its current account table.
- Saving accounts writes both to local browser storage and to the backend.

Do not put real backend passwords or database service keys into frontend JavaScript files.
