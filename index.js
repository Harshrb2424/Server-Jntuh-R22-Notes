import express from "express";
import ejs from "ejs";
import fs from "fs";
let jsonData;
fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading data.json:', err);
      return;
    }
    jsonData = JSON.parse(data);
});

const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.get("/", (req, res) => {
    const d = new Date();
    let day = d.getDay();
    res.render('index', {data: jsonData});
  });


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
