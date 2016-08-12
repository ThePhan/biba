routerApp.service('DataService', function($rootScope, $http) {
  var url = "metadata.json";

// no function callback
  this.getData = function(){
    return $http.get(url);
  }


/* Use function callback*/

//   var apiGet = function(url,callbackSuccess,callbackError){
//   $http.get(url).success(function(res){
//       callbackSuccess(res);
//   }).error(function(err){
//       callbackError(err);
//   })
// };
});
