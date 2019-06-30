// creating recipe service with dummy logic
app.controller("eventsCtrl", function($scope, userSrv, $location, eventSrv) {

    if (!userSrv.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.user = userSrv.getActiveUser();

    eventSrv.getActiveUserEvents().then(function(events) {
        $scope.events = events;
    });
   

})