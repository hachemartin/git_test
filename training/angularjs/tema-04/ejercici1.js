var app=angular.module("app",[]);
   
app.controller("PruebaController",["$scope",function($scope) {
 
  $scope.fecha=new Date();
  $scope.numeroDecimal=321.98324;
  $scope.texto="Hola Mundo";
  $scope.objeto='{nombre:"Juan",apellido:"Perez",direccion: {calle:"Avenida Blasco Ibañez",numero:34}}';
 
}]);

