// recipes html + ctrl. logout, real isUserLoggedIn, greeting for user name
app.factory("userSrv", function($q, $http) {

    var activeUser = null; // new User({id: 1, fname: "Nir" ...})
    var strName = ""; 
    function User(plainUser) {
        this.id = plainUser.id;
        this.fname = plainUser.fname;
        this.lname = plainUser.lname;
        this.email = plainUser.email;
        this.zevetordayar = plainUser.zevetordayar;
    }


    

    function isLoggedIn() {
        return activeUser ? true : false;
    }

    // login will check if the user and password exists. If so it will update the active user 
    // variable and will return it
    function login(email, pwd) {
        var async = $q.defer();

        activeUser = null;
        $http.get("app/model/data/users.json").then(function(res) {
            var users = res.data;
            for (var i = 0; i < users.length && !activeUser; i++) {
                if (email === users[i].email && pwd === users[i].pwd) {
                    activeUser = new User(users[i]);
                    async.resolve(activeUser);
                } 
            }
            if (!activeUser) {
                async.reject(401);
            }
        }, function(err) {
            async.reject(err);
        })

        // if (email === "nir@nir.com" && pwd === "123") {
        //     activeUser = new User({ id: 1, fname:"Nir", lname: "Channes", email: "nir@nir.com" });
        //     async.resolve(activeUser);
        // } else {
        //     async.reject(401);
        // }

        return async.promise;
    }

    function nameOfId(useIdIn) {
        var async = $q.defer();
        console.log("fdfhhhh");
        $http.get("app/model/data/users.json").then(function(res) {
            var users2 = res.data;
            for (var j = 0; j < useIdIn.length ; j++) {
               for (var i = 0; i < users2.length;  i++) {
                   if (users2[i].id === useIdIn[j]) { 
                       strName += users2[i].fname + "  ";
                       
                   } 
                }  
            }
            async.resolve(strName);
            
        }, function(err) {
            async.reject(err);
        })

        return async.promise;
    }

    function logout() {
        activeUser = null;
    }

    function getActiveUser() {
        return activeUser;
    }

    return {
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
        getActiveUser: getActiveUser,
        nameOfId:nameOfId
    }

});