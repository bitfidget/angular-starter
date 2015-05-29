'use strict';

app.factory('RestService', function(Restangular, $q) {
    
    return {
      getData: function(endPoint, params, errMsg) {

        var deferred = $q.defer();

        console.log('get data from ' + endPoint + params)

        // returns deferred promise once it arrives, handles errors separately - appends params nicely
        
        
        Restangular.one(endPoint + '.json').get(params).then(function(res) {
          deferred.resolve(res);
        }, function(err) {
          console.log(errMsg, err.status, err.statusText)
        });
        return deferred.promise; 
        
      },
      postData: function(endPoint, params, errMsg) {

        var deferred = $q.defer();

        console.log('post data to ' + endPoint + params)

        // returns deferred promise once it arrives, handles errors separately - appends params nicely
        
      
        Restangular.all(endPoint).post(params).then(function(res) {
          deferred.resolve(res);
        }, function(err) {
          console.log(errMsg, err.status, err.statusText)
        });
        return deferred.promise; 
      },
      putData: function(endPoint, params, errMsg) {
        Restangular.all('Partners').one('Password').customPUT(obj);
      }
      
    };
  });
