const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

let value = 0;

app.get("/", (req, res) => {
  res.send(value);
});

app.post("/", (req, res) => {
  try {
    switch (req.body.request) {
      case INCREMENT: {
        value = value + 1;
        res.send({ value });
      }
      case DECREMENT: {
        value = value - 1;
        res.send({ value });
      }
      case RESET: {
        value = 0;
        res.send({ value });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
