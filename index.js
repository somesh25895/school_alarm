import express from "express";
import fs from "fs";

const app = express();
const file = "status.txt";

app.get("/", (req, res) => {
  if (req.query.set) {
    fs.writeFileSync(file, req.query.set);
    res.send(`Alarm set to ${req.query.set}`);
  } else {
    if (!fs.existsSync(file)) fs.writeFileSync(file, "off");
    res.send(fs.readFileSync(file, "utf8"));
  }
});

const port = process.env.PORT || 10000;
app.listen(port, () => console.log(`Running on ${port}`));
