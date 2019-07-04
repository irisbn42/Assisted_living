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
            this.userIdIn = plainEvent.userIdIn;
            this.img = plainEvent.img;
            this.userId = plainEvent.userId;
        }
    }

///

////



    function getAllActiveEvent() {
        var async = $q.defer();

        var activeUserId = userSrv.getActiveUser().id;
        $http.get("app/model/data/events.json").then(function(res) {
              for (var i = 0; i < res.data.length; i++) {
                events.push(new Event(res.data[i]));
                nextEventsId = res.data.length;
                var idStam = events[i].userId[1];
              }
        async.resolve(events);
    }, function(err) {
        async.reject(err);
    });
  
   return async.promise;
    }



     // Returning (with a promise) a single car by its index in the array
  function getEventByIndex(index) {
    var async = $q.defer();

    // Getting all the cars and returning a single car by its index in the array
    getAllActiveEvent().then(function(events) {
      if (index >= events.length) {
        async.reject("Index out of bounds")
      }
      
      async.resolve(events[index]);
    }, function(err) {
      async.reject(err);
    })

    return async.promise;
  }

  function addEvent(name, desc, img , date ) {
    var async = $q.defer();

    var activeUserId = userSrv.getActiveUser().id;

    // Creating an object elelment to pass to the contructor
    var plainEvent = {
        "id": nextEventsId,
        "name": name, 
        "desc": desc,
        "img": img,
        "date": date,
        "status": 1,
        "userIdIn":false,
        "userId":[]
     }
    var newEvent = new Event(plainEvent);
    events.push(newEvent);

    // preparing the id for the next addition
    ++nextEventsId;
       
    async.resolve(newEvent);

    return async.promise;
}

return {
    getAllActiveEvent: getAllActiveEvent,
    addEvent: addEvent,
    getEventByIndex: getEventByIndex
}


  

});