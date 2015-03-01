 'use strict';

angular.module('fitbookerApp')
.provider('Account', function() {

  this.$get = ['$resource', function($resource) {
    var Account = $resource('/api/accounts/:_id', { '_id': '@_id' }, {
      update: {
        method: 'PUT'
      }
    });

    return Account;
  }];
});