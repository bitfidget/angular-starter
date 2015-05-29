'use strict';

/**
 * @ngdoc function
 * @name ccApp.controller:SearchCtrl
 * @description
 * # MainCtrl
 * Controller of the ccApp
 */
 app.controller('SearchCtrl', function ($scope, RestService) {

    $scope.searchComplete = function(searchString) {

      // construct params object prior to making call

      // add number for lazy load

      var params = {
        q : searchString,
        num : 50
      }

      // RestService - send endpoint, params as object, error message

      RestService.getData('search', params, 'searchGetFail').then(function(res) {
        console.log(res['search-results'])
      });


      // console.log($scope.searchResult)

    }

    $scope.searchCompletePost = function(searchString) {

      // construct params object prior to making call

      // add number for lazy load

      var params = {
        q : searchString,
        num : 50
      }

      RestService.postData('search', params, 'searchPostFail').then(function(res) {
        console.log(res['search-results'])
      });


      // console.log($scope.searchResult)

    }
    
    //next - autocomplete!
    //http://www.justgoscha.com/allmighty-autocomplete/


  });