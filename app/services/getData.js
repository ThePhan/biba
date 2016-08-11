routerApp.service('DataService', function($rootScope, $http) {
  var newData = [];

  this.getData = function(){
    $http.get("metadata.json").success(function(response){
      newData = response;
      // console.log(newData);
    });
    return newData;
  }
});
