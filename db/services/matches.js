var model = require('../schema/match'),
		Base = require('../base-service');

// define services of user
var Services = Base.extend({
	modelClass: model
});

/**
 * Expose
 */
module.exports = Services;