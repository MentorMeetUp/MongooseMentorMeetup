const db = require("../models");

module.exports = {

	findByEmail: function(req, res) {
	    db.Users
	      .find({email:req.params.email})
	      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
	},
	findAll: function(req, res) {
		db.Users
		.find({skill1:req.params.skill })
	      .then(dbModel => res.json(dbModel))
	      .catch(err => res.status(422).json(err));
	}
};
