const router = require("express").Router();
const request = require("request");
const db = require("../../models");

// connect to auth0
var options = { method: 'POST',
  url: 'https://rentplace.auth0.com/dbconnections/signup',
  headers: { 'content-type': 'application/json' },
  body: 
  { client_id: 'v0W04Kiqx2m672ihXU3w5C4KWLclXCx4',
    email: '',
    password: '',
    connection: 'Username-Password-Authentication' },
  json: true 
};

// capture email address from auth0 and then create local user
router.post("/signup", (req, res) => {
  options.body.email = req.body.email;
  options.body.password = req.body.password;
  request(options, function (error, response, body) {
    if (error) {
      throw new Error(error);
    } else {
      db.User
      .create({
        name: req.body.name,
        role: req.body.role,
        email: req.body.email,
        address1: req.body.address1,
        address2: req.body.address2,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        phone: req.body.phone
      })
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel)
      })
      .catch(err => {
        res.status(422).json(err);
      });
      console.log(body);
    };
  
  });
  
});

module.exports = router;