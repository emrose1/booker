'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN:           'http://localhost:9000',
  SESSION_SECRET:   'fitbooker-secret',

  FACEBOOK_ID:      'app-id',
  FACEBOOK_SECRET:  'secret',

  TWITTER_ID:       'app-id',
  TWITTER_SECRET:   'secret',

  GOOGLE_ID:        'app-id',
  GOOGLE_SECRET:    'secret',

  // Control debug level for modules using visionmedia/debug
  DEBUG: '', 
  
  MAIL_SERVICE: "Mailgun", // sets automatically host, port and connection security settings
  MAIL_USER: "",
  MAIL_PASS: "",
  MAIL_FROM_NAME: "Modular Fullstack",
  MAIL_FROM_ADDRESS: "modular@fullstack.org",
  MAIL_CONFIRMATION_SECRET: "mailconfsecret",
  PASSWORD_RESET_SECRET: "pwdresetsecret"
};
