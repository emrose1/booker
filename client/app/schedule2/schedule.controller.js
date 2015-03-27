/*angular.module('app.schedule')

.controller('calendarCtrl', ['Schedule',
    function(Schedule) {

    $scope.schedule = new Schedule();

    var getSchedules = function() {
      .query({'account_id' : session.getAccount()}, function(calendars) {
        $scope.calendars = calendars;
        $scope.setCalendar(calendars[0].id);
      });
    };

    $scope.newSchedule = function() {
        $scope.schedule = new Schedule();
        $scope.editing = false;
    };

    $scope.activeSchedule = function(schedule) {
        $scope.schedule = schedule;
        $scope.editing = true;
        session.setSchedule(schedule.id);
    };

    $scope.save = function(schedule) {
        if (schedule.id) {
            schedule.$update({'account_id' : session.getAccount()}, function(){
                getSchedules();
            });
        } else {
            schedule.$save({'account_id' : session.getAccount()}, function() {
                getSchedules();
            });
        }
        $scope.newSchedule();
    };

    $scope.delete = function(schedule) {
        schedule.$delete({account_id: session.getAccount()}, function(){
            getSchedules();
        });
    };

    $scope.setSchedule = function(schedule) {
        //session.setSchedule(schedule);
        $scope.selectedSchedule = schedule;
        $scope.$emit('scheduleLoaded', {});
    };

    $rootScope.$on('accountLoaded', function(event, args) {
        getSchedules();
    });

  }
]);
*/
