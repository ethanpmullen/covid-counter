const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let value = 0;

app.get("/api", (req, res) => {
  res.send({ value });
});

app.post("/api", (req, res) => {
  try {
    if (req.body.type === "INCREMENT") value = value + 1;
    else if (req.body.type === "DECREMENT") value = value - 1;
    else if (req.body.type === "RESET") value = 0;
    else if (req.body.type === "INPUT") value = req.body.newValue;

    res.send({ value });
    console.log(value);
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
