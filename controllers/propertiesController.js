const db = require("../models");

// Defining methods for the propertiesController
module.exports = {
  // find all properties
  findAll: function(req, res) {
    db.Property
      .find(req.query)
      .populate('_landlord')
      .populate('_tenant')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // find property by id
  findById: function(req, res) {
    db.Property
      .findById(req.params.id)
      .populate('_landlord')
      .populate('_tenant')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // find property by landlord
  findByLandlord: function (req, res) {
    db.Property
      .find({ '_landlord': req.params.id })
      .populate('_landlord')
      .populate('_tenant')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // find property by tenant
  findByTenant: function (req, res) {
    db.Property
      .findOne({ '_tenant': req.params.id })
      .populate('_landlord')
      .populate('_tenant')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Property
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Property
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Property
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
