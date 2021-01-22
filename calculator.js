const express = require("express");
const bodyParser = require("body-parser");

// NODE
const app = express();
// Special mode of bodyParser that we're going to be using to parse data that comes
// from an HTML form
app.use(bodyParser.urlencoded({extended: true}));

// EJS
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("The result is " + result);
})

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight / (height * height);
    res.send("The BMI result is " + bmi);
});

const day = date.getDay();

app.get ("/about", function(req, res) {
    var today = new Date();

    const options = {
        weekday: "long",
        month: "long",
        day: "numeric"
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render("about", {
        templateDay: day
    });
});

app.listen(3000, function() {
    console.log("server is listening on port 3000");
});
