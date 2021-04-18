const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const url = require("url");
const httpserver = require("http").createServer(app);
const { spawn } = require("child_process");
const PORT = 5050;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post(`http://localhost:${PORT}/newRepo/:name`, (req, res) => {
  var URL = url.parse(req.url);
  var reponame = req.params.name;
  // console.log(req.url, req.body, 'POST');
  var child = spawn("bash", ["script.sh", reponame]);
  console.log(child);
  child.stdout.on("data", data =>
    console.log(`Data of ${child.pid} ### ${data.toString()}`)
  );
});

app.get(`/repository/:name`, (req, res) => {
  var URL = url.parse(req.url);
  var reponame = req.params.name;
  console.log(reponame);
  console.log(req.url, req.body, "GET");
  var child = spawn("bash", ["clone.sh", reponame]);
  // console.log(child);
  child.stdout.on("exit", () => {
    var files = fs.readdirSync(path.join(__dirname, "repo", reponame));
    res.end(JSON.stringify({files: files}))
  });
  child.stdout.on("close", () => {
    var files = fs.readdirSync(path.join(__dirname, "repo", reponame));
    res.header('Access-Control-Allow-Origin', '*')
    res.end(JSON.stringify({files: files}))
  });
});

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
