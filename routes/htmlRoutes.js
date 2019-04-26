var db= require("../models")

module.exports = function(app) {
    // Load index page
    app.get("/home", function(req, res) {
      res.send("helloworld");
    });
}