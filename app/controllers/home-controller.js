routerApp.controller('homeController',  function(DataService, $scope, $http, toastr){

  $scope.signUp = function(){
    var timeToastr = 20000;
    if ($scope.myForm.email.$error.required) {

      toastr.warning('Please input your email.', 'Warning', {timeOut: timeToastr});
    }else {
      if ($scope.myForm.email.$error.email) {
        toastr.error('Invalid email address.', 'Error', {timeOut: timeToastr});

      }else {
        toastr.success('Sign up success.', 'Success', {timeOut: timeToastr});
        $scope.email = '';
      }

    }
  };

// function goresult(callback){
//       // DataService.getData();
//       callback();
//   }
//
// $scope.result = goresult(DataService.getData());
// console.log($scope.result);

  $http.get("metadata.json").success(function(response){
    $scope.result = response;
  }).error(function(error){
    console.log(error);
  });

});
