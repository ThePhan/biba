routerApp.service('DataService', function($rootScope, $http) {
  var newData = [];
  // newData.subData={};
  // this.dataf = function(){
  //   return $http.get("metadata.json");
  // }
  this.getData = function(){
    $http.get("metadata.json").success(function(response){
      newData = response;
      // console.log(newData);
    });

    return newData;
  }
});
