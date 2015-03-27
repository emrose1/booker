 'use strict';

angular.module('app')
.provider('Schedule', function() {

  this.$get = ['$resource', function($resource) {
    var Schedule = $resource('/api/accounts/:account/schedules/:_id', { '_id': '@_id', 'account' : '@account' }, {
      update: {
        method: 'PUT'
      }
    });

    return Schedule;
  }];
});
