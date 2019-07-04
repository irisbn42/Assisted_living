app.controller("eventDetailsCtrl", function($scope, $log, eventSrv, $routeParams) {
  
    // Calling the service to get the car with the index
    // Notice how we are accessing $routeParams.id to get the dynamic part in the URL
    eventSrv.getEventByIndex($routeParams.id).then(function(event) {
            $scope.event = event;
      
    //   $scope.mapURL = $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyDYss1RsxvYgPMb80w568QggvjYoTojd6Q&q=" + $scope.event.desc);
      
    }, function(err) {
      $log.error(err);
    });
    
  });
  

  