var app = angular.module("eventApp", ["ngRoute", "ngImageInputWithPreview"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/home/home.html"
    }).when("/login", {
        templateUrl: "app/login/login.html",
        controller: "loginCtrl"
    }).when("/signup", {
        
    }).when ("/events", {      //           ("/recipes", {
        templateUrl: "app/events/events.html",
        controller: "eventsCtrl"        
    }).when("/new", {
        
  

    }).when("/events/:id", {
       templateUrl: "app/events/eventDetails.html",
       controller: "eventDetailsCtrl"
    });

});
   