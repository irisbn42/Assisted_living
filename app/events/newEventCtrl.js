// using a directive to show a preview of an image
app.controller("newRecipeCtrl", function($scope, eventSrv, $log) {

    $scope.name = "";
    $scope.desc = "";
    $scope.img = {};

    $scope.addEvent = function() {
       recipeSrv.addRecipe($scope.name, $scope.desc, $scope.img.src).then(function(newEvent) {
            $log.info("new recipe added: " + JSON.stringify(newEvent));
            $("#modelId").modal('hide')
       });
    }

    $scope.cancelNewEvent = function() {
        $scope.name = "";
        $scope.desc = "";
        $scope.img = {}; 
        $("#modelId").modal('hide')
    }


})