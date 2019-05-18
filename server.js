const express = require('express');
const app = express();
// const Homes = require("./routes/api/homes");

//var db = require("./models");

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Routes
//require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// // If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  console.log("Working!")
  syncOptions.force = true;
}

// app.get('/api/customers', (req, res) => {
//   const customers = [
//     {id: 1, firstName: 'John', lastName: 'Doe'},
//     {id: 2, firstName: 'Brad', lastName: 'Traversy'},
//     {id: 3, firstName: 'Mary', lastName: 'Swanson'},
//   ];
 
//   res.json(customers);
// });

// app.use("/api/homes", Homes)

const PORT = 5000;

// Starting the server, syncing our models ------------------------------------/
// db.sequelize.sync(syncOptions).then(function() {
  
// });

app.listen(PORT, function() {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});

module.exports = app;
