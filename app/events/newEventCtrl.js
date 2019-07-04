// using a directive to show a preview of an image
app.controller("newEventCtrl", function($scope, eventSrv, $log) {

    $scope.name = "";
    $scope.desc = "";
    $scope.date = "";
    $scope.img = {};

    
    $scope.addEvent = function() {
        eventSrv.addEvent($scope.name, $scope.desc, $scope.img.src ,$scope.date).then(function(newEvent) {
            $log.info("new event added: " + JSON.stringify(newEvent));
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