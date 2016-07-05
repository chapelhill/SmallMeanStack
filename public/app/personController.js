var app = angular.module('myApp', []);
app.controller('personCtrl',  function($scope, $http) {

	  $scope.formData = {};


    $scope.formData.firstName = "John";
    $scope.formData.lastName = "Doe";
  


   $scope.addContact =function(){
            $http.post('/users', $scope.formData).success(function (data) {
            	console.log(data);
                // Once complete, clear the form (except location)
                $scope.formData.firstName = "";
                $scope.formData.lastName = ""; 
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
   };
   $scope.fullName = function() {
        return $scope.formData.firstName + " " + $scope.formData.lastName;
    };
});