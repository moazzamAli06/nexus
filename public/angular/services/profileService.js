
convopal.factory('profileService', function($http) {

    return {
        // get all the comments
        get : function() {
            // return $http.get('/api/comments');
        },

        // save a comment (pass in comment data)
        save : function(userDetails) {
            var year = userDetails.year.model;
            return $http({
                method: 'POST',
                url: 'profile/store',
                data: {name:userDetails.username,email:userDetails.email,imageUrl:userDetails.imageUrl,country:userDetails.countries.model,
                timezone:userDetails.timezone.model,year:userDetails.year.model,day:userDetails.day.model,month:userDetails.month.model,gender:userDetails.gender.model },
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(data){
                console.log(data);
            });
        },

        // destroy a comment
        // destroy : function(id) {
        //     return $http.delete('/api/comments/' + id);
        // }
    }

});