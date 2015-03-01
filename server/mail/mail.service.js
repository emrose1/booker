'use strict';

var  config = require('../config/environment');
var nodemailer = require("nodemailer");
var _ = require('lodash');


var emailTemplates;

require('email-templates')(__dirname, { open: '{{', close: '}}' }, function(err, _emailTemplates) {

    if (err) {
      console.log('Error on opening template:');
      console.log(err);
    } else {

    emailTemplates = _emailTemplates;

    }
  });

var transporter = nodemailer.createTransport(config.mail);

var generateMail = function(templateName, locals, callback){

  emailTemplates(templateName, locals, function(err, html, text) {
    if (err) {
      console.log('Error on generating mail:');
      console.log(err);
    } else {
      console.log('email generated');
      callback(html);
    }
  });

};




 exports.sendmail = function(templateName, user, subject, locals, callback) {

  var cb = callback || _.noop;

  console.log('Send ' + subject + 'Mail');

  generateMail(templateName, locals, function(html){

    var mailOptions = {
      from: config.mail.auth.user,
      to: {
        name: user.name,
        address: user.email
      },
      subject: subject,
      html: html,
    };

   /* var mailOptions = {
      from: 'Fred Foo ✔ <foo@blurdybloop.com>', // sender address
      to: 'emjrose@gmail.com, baz@blurdybloop.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world ✔', // plaintext body
      html: '<b>Hello world ✔</b>' // html body
    };*/

    transporter.sendMail(mailOptions, function(error, info){
      if(error){
        console.log('Error on sending' + subject + ' mail:');
        console.log(error);
          console.log(config.mail);
      }else{
        console.log(subject + 'Mail sent: ');
        //console.log(info);
        cb(info.response);
      }
    });
  });
};




