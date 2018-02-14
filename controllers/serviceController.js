const db = require("../models");

// Defining methods for the serviceController
module.exports = {
  // find all service requests, populate landlord and tenant info
  findAll: function(req, res) {
    db.ServiceReq
      .find({})
      .populate('_landlord')
      .populate('_tenant')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // find service request by id
  findById: function(req, res) {
    db.ServiceReq
      .findById(req.params.id)
      .populate('_landlord')
      .populate('_tenant')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // find service request by property id
  findByPropId: function (req, res) {
    db.ServiceReq
      .find({ '_property': req.params.id })
      .populate('_landlord')
      .populate('_tenant')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // find service request by property
  findByProperty: function (req, res) {
    db.ServiceReq
      .find({ '_property': {$in: req.body }})
      .populate('_property')
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  // find service request by tenant
  findByTenant: function (req, res) {
    db.ServiceReq
      .find({ '_tenant': req.params.id })
      .populate('_landlord')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.ServiceReq
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.ServiceReq
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.ServiceReq
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};