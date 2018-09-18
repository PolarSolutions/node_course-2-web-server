const express = require("express");
const hbs = require("hbs");
const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

// app.use((req, res, next) => {
//   next();
// });

// app.use((req, res, next) => {
//   res.render("about.hbs");
// });

app.use(express.static("public"));

hbs.registerHelper("getCurrentYear", () => {
  return new Date().getFullYear();
});

hbs.registerHelper("screamIt", text => {
  return text.toUpperCase();
});

app.get("/", (req, res) => {
  res.render("home.hbs", {
    name: "Rafael1",
    likes: ["Singing", "Computer"],
    pageTitle: "Home page Mustache"
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    pageTitle: "About page Mustache"
  });
});

app.get("/bad", (req, res) => {
  res.send({
    errorMessage: "Bad request"
  });
});

app.listen(port, ()=> {
  console.log(`Server is running on port ${port}`)
});
