routerApp.controller('homeController',  function(DataService, $scope, $http, toastr){

  $scope.signUp = function(){
    var a = 9;
    var timeToastr = 2000;
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
  $scope.result = [];
  $scope.result = DataService.getData();
  // console.log( DataService.getData());
  console.log($scope.result);


  // $http.get("metadata.json").success(function(response){
  //   $scope.result = response;
  // }).error(function(error){
  //   console.log(error);
  // });

});
