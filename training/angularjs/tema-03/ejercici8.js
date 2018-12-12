var myApp = angular.module('todoApp', []);
myApp.controller('MainController', ['$scope', function($scope) {
  $scope.timeOfDay = 'dia';
  $scope.name = 'Nikki';
}]);
myApp.controller('ChildController', ['$scope', function($scope) {
  $scope.name = 'Marta';
}]);
myApp.controller('GrandChildController', ['$scope', function($scope) {
  $scope.timeOfDay = 'tarda';
  $scope.name = 'Bebe';
}]);
