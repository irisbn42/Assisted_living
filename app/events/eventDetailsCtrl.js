app.controller("eventDetailsCtrl", function($scope, $log, eventSrv, $routeParams,userSrv,$window) {
  
    // Calling the service to get the car with the index
    // Notice how we are accessing $routeParams.id to get the dynamic part in the URL
    eventSrv.getEventByIndex($routeParams.id).then(function(event) {
            
            $scope.event = event;
            console.log(event.id);
            $window.sessionStorage.currentEventId = event.id;
            $window.sessionStorage.currentEventName = event.name;
            $window.sessionStorage.currentEventDesc = event.desc;
            $window.sessionStorage.currentEventImgsrc = event.img.src;
            $window.sessionStorage.currentEventDate = event.date;
            $window.sessionStorage.currentEventStatus = event.status;
            $window.sessionStorage.currentEventStatus = event.status;
            $window.sessionStorage.currentEventStatus = event.status;
            
            
            // console.log(event.userId);
            userSrv.nameOfId(event.userId).then(function(userIdName) {
              $scope.userIdName = userIdName;
         
             }, function(err) { 
              $log.error(err);
            });
        
      
    //   $scope.mapURL = $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyDYss1RsxvYgPMb80w568QggvjYoTojd6Q&q=" + $scope.event.desc);
      
    }, function(err) {
      $log.error(err);
    });
    
    $scope.user = userSrv.getActiveUser();
     
    // userSrv.nameOfId(event.useId).then(function(userIdName) {
    //   $scope.userIdName = userIdName;
 
    //  }, function(err) { 
    //   $log.error(err);
    // });

  

     
  });
  

  