const express = require("express");
const axios = require("axios");

const app = express();

app.get("/api/khotiyan/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const response = await axios.get(
      "https://bcl-verify.live/khotiyan/khotiyan_view.php",
      {
        params: { khotiyan_no: id },
        headers: { "user-agent": "Mozilla/5.0" }
      }
    );

    res.send(response.data);
  } catch {
    res.send("Error fetching data");
  }
});

app.use(express.static(__dirname));

app.listen(3000);
