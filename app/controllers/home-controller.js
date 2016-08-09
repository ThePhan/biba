routerApp.controller('homeController',  function($scope, $http, $state, toastr){

  $scope.signUp = function(){
    var a = 9;
    if (a = 8) {

      toastr.error('Your list is empty.', 'Warning');
    }else {
      toastr.error('Your list is empty.', 'Warning');

    }
  };
});
