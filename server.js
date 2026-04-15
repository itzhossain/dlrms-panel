const express = require("express");
const axios = require("axios");

const app = express();

const config = {
  auth_token: process.env.AUTH_TOKEN,
  user_token: process.env.USER_TOKEN,
  cookie: process.env.COOKIE
};

app.get("/api/details/:id", async (req, res) => {
  try {
    const r = await axios.get(
      `https://gateway.dlrms.land.gov.bd/core-api/api/citizens/orders/${req.params.id}`,
      {
        headers: {
          accept: "application/json",
          authorization: "Bearer " + config.auth_token,
          "user-token": "Bearer " + config.user_token,
          cookie: config.cookie
        }
      }
    );
    res.json(r.data);
  } catch {
    res.json({ error: "failed" });
  }
});

app.use(express.static(__dirname));

app.listen(3000);
