const db = require("../models");

// Defining methods for the usersController
module.exports = {
  // find all users
  findAll: function(req, res) {
    db.User
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // find tenants not assigned to a property
  findUnassignedTenants: function(req, res) {
    db.User
      .find({role: "Tenant", assigned: false})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // update tenant by email or id
  updateUser: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.email }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // find all users who are tenants
  findAllTenants: function (req, res) {
    db.User
      .find({role: "Tenant"})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // find a user by email
  findByEmail: function(req, res) {
    db.User
      .findOne({email: req.params.email})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // find a user by id
  findById: function(req, res) {
    db.User
      .findOne({_id: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // create new user
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};