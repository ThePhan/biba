routerApp.controller('homeController',  function($scope, $http, $state, toastr){

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
});
