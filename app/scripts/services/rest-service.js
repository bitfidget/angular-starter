'use strict';

app.factory('RestService', function(Restangular, $q) {
    return {
      getData: function(endPoint, params, errMsg) {

        console.log('get data from ' + endPoint + params)

        // returns deferred promise once it arrives, handles errors separately - appends params nicely
        
        var deferred = $q.defer();
        Restangular.one(endPoint + '.json').get(params).then(function(res) {
          deferred.resolve(res);
        }, function(err) {
          console.log(errMsg, err.status, err.statusText)
        });
        return deferred.promise;
      }
    };
  });
