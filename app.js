var express = require("express");
var app = express();
var path = require("path");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get("/sobre", (req, res) => {
    res.sendFile(__dirname + "/public/navegacao/sobre.html");
})

app.get("/contato", (req, res) => {
    res.sendFile(__dirname + "/public/navegacao/contato.html");
})

app.listen(7070, () => {
    console.log("Executando");
});