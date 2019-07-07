// using a directive to show a preview of an image
app.controller("idkunEventCtrl", function($scope, eventSrv, $log, $window) {
    console.log($scope);
    console.log(JSON.stringify($window.sessionStorage));
    $scope.eventid     = $window.sessionStorage.currentEventId ;
    $scope.eventname   = $window.sessionStorage.currentEventName ;
    $scope.eventdesc   = $window.sessionStorage.currentEventDesc;
    $scope.eventimgsrc = $window.sessionStorage.currentEventImgsrc;
    $scope.eventdate   = $window.sessionStorage.currentEventDate ;
    $scope.eventstatus = $window.sessionStorage.currentEventStatus ;
    $scope.eventuserIdIn = $window.sessionStorage.currentEventUserIdIn ;
    $scope.eventuserId = $window.sessionStorage.currentEventUserId ;
            
    $scope.idkunEvent = function() {
        ( $scope.eventid,$scope.eventname, $scope.eventdesc, $scope.eventimgsrc , $scope.eventdate 
            ,$scope.eventstatus ,$scope.eventuserIdIn,$scope.eventuserId).then(function(idkunEvent) {
            $log.info("new event added: " + JSON.stringify(idkunEvent));
            $("#modelId").modal('hide')
       });
    }

    $scope.cancelNewEvent = function() {
        $scope.name = "";
        $scope.desc = "";
        $scope.date = "";
        $scope.status = "";
        $scope.img = {}; 
        $("#modelId").modal('hide')
    }


})