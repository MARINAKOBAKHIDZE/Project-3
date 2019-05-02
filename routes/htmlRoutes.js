var db= require("../models")

module.exports = function(app) {
    // Load index page
    app.get('/api/customers', (req, res) => {
      const customers = [
        {id: 1, firstName: 'Jon', lastName: 'Doe'},
        {id: 2, firstName: 'Brad', lastName: 'Traversy'},
        {id: 3, firstName: 'Mary', lastName: 'Swanson'},
      ];
     
      res.json(customers);
    });
}