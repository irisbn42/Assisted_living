app.factory("eventSrv", function($q, $http, userSrv) {

    // All of these variables are a hack becasue we don't have a server side
    // mianitng all the recipes in the memory
    var events = [];   // key is userId and value is an array of the user's recipes
    var nextEventsId;

    // New ES6 syntax for creating a constructor
    class Event {
        constructor(plainEvent) {
            this.id = plainEvent.id;
            this.status = plainEvent.status;
            this.name = plainEvent.name;
            this.desc = plainEvent.desc;
            this.date = plainEvent.date;
            this.img = plainEvent.img;
            this.userId = plainEvent.userId;
        }
    }

    function getAllActiveEvent() {
        var async = $q.defer();

        var activeUserId = userSrv.getActiveUser().id;
        $http.get("app/model/data/events.json").then(function(res) {
              for (var i = 0; i < res.data.length; i++) {
                events.push(new Recipe(res.data[i]));
                nextEventsId = res.data.length;
                var idStam = events[i].userId[1];
              }
        async.resolve(events);
    }, function(err) {
      console.error(err);
      async.reject(err);
    });
  
   return async.promise;
    }

   



    function addEvent(name, desc, img ) {
        var async = $q.defer();

        var activeUserId = userSrv.getActiveUser().id;

        // Creating an object elelment to pass to the contructor
        var plainEvent = {
            "id": nextEventsId,
            "name": name, 
            "desc": desc,
            "img": img,
            "status": 1
         }
        var newEvent = new Event(plainEvent);
        events[activeUserId].push(newEvent);

        // preparing the id for the next addition
        ++nextRecipeId;

        async.resolve(newRecipe);

        return async.promise;
    }

    return {
        getActiveUserRecipes: getActiveUserRecipes,
        addRecipe: addRecipe
    }



});