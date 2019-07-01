// creating recipe service with dummy logic
app.controller("eventsCtrl", function($scope, userSrv, $location, eventSrv) {

    if (!userSrv.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.user = userSrv.getActiveUser();
    $scope.myVar = true;
    eventSrv.getAllActiveEvent().then(function(events) {
      
        $scope.events = events;
        for (var j=0; j < events.length; j++) {
            for (var i=0; i < events[j].userId.length; i++) {
                  if ($scope.events[j].userId[i]== $scope.user.id ) {
                      $scope.events[j].userIdIn = true;
                  }
            }
        }
       
    });
   


      $scope.toggleCheckBox = function(event){
      if ( event.userIdIn==true){
        event.userIdIn=false;
        var n = event.userId.indexOf($scope.user.id);
        event.userId.splice(n, 1);
      }
      else  {
        event.userIdIn=true;
        event.userId.push($scope.user.id);
      }
      }


})