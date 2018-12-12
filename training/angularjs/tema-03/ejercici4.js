var app = angular.module('Soci', []);
app.controller('mainController', function($scope){
   $scope.cibernarium = "Cibernarium";
});

//En el controlador hem creat la variable "cibernarium" dins del $scope, al cual li hem asignat el valor "Cibernarium". Per altre part, en la vista podem veure la forma de com accedim a la variable i la mostrem.