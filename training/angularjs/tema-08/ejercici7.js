var app=angular.module("app",[]);
  
app.value("miServicioValue","Hola mundo");
 
app.controller("PruebaController",["$scope","miServicioValue",function($scope,miServicioValue) {
  $scope.valor=miServicioValue;  
}]);