
convopal.factory('authService', function($http) {

    return {
        // get all the comments
        get : function() {
            return $http.get('/api/comments');
        },

        // save a comment (pass in comment data)
        save : function(userDetails) {
            return $http({
                method: 'POST',
                url: 'user/store',
                data: {name:userDetails.name,email:userDetails.email,imageUrl:userDetails.imageUrl},
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