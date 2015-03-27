'use strict';

angular.module('app')
.controller('ScheduleCtrl', ['Schedule', 'Auth',
  function (Schedule, Auth) {
  var vm = this;

  vm.currentAccount = Auth.getCurrentUser().account;
  vm.schedule = new Schedule();

  var getSchedules = function() {
    Schedule.query({'account' : vm.currentAccount}, function(schedules) {
      vm.schedules = schedules;
      vm.setSchedule(schedules[0].id);
    });
  };

  getSchedules();

  vm.newSchedule = function() {
   vm.schedule = new Schedule();
   vm.editing = false;
  };

  vm.activeSchedule = function(schedule) {
    vm.schedule = schedule;
    vm.editing = true;
    session.setSchedule(schedule.id);
  };

  vm.save = function(schedule) {

    if (schedule._id) {
      schedule.$update().then(function(){
        getSchedules();
      });
    } else {
      schedule.account = vm.currentAccount;
      schedule.$save().then(function() {
        getSchedules();
      });
    }
    vm.newSchedule();
  };

  vm.delete = function(schedule) {
    schedule.$delete(function(){
      getSchedules();
    });
  };

  vm.setSchedule = function(schedule) {
    vm.selectedSchedule = schedule;
  };

}]);
