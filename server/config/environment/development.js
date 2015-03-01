'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/fitbooker-dev'
  },

  mail: {
	  service: 'Gmail',
	  auth: {
	      user: 'emjrose@gmail.com',
	      pass: 'Cokie1971'
	  }
	},

  seedDB: true
};
