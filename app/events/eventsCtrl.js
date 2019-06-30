// creating recipe service with dummy logic
app.controller("eventsCtrl", function($scope, userSrv, $location, eventSrv) {

    if (!userSrv.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.user = userSrv.getActiveUser();
    $scope.myVar = true;
    eventSrv.getAllActiveEvent().then(function(events) {
      
 
        for (var j=0; j < event.length; j++) {
            for (var i=0; i < event.userId.length; i++) {
                  if (events[j].userId[i]== $scope.user ) {
                     events[j].userIdIn = "true";
                  }
            }
        }
        $scope.events = events;
    });
   


    // $scope.toggleCheckBox = function(){
    // if ($scope.myVar==true){
    //     $scope.myVar=false;
    // }
    // else  {
    //     $scope.myVar=true;
    // }
    // }


})