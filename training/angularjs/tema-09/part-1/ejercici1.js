var app = angular.module("app", []);

app.controller("PruebaController", ["$scope", "$http",function($scope, $http) {

    $scope.importeTotal = 0;
    $scope.mensajeFinal = "";
    
    $http({method: 'GET',url: 'ejercici91.json'}).success(function(data, status, headers, config) {
      $scope.importeTotal = $scope.importeTotal + data.importe;
      $http({method: 'GET',url: 'ejercici92.json'}).success(function(data, status, headers, config) {
        $scope.importeTotal = $scope.importeTotal + data.importe;
        $http({method: 'GET',url: 'ejercici93.json'}).success(function(data, status, headers, config) {
          $scope.importeTotal = $scope.importeTotal + data.importe;
          $http({method: 'GET',url: 'ejercici94.json'}).success(function(data, status, headers, config) {
            $scope.importeTotal = $scope.importeTotal + data.importe;
            $scope.mensajeFinal = "Ya hemos finalizado la lista de cálculos";
          });
        });
      });
    });

    $scope.importeTotalPromesas = 0;
    $scope.mensajeFinalPromesas="";
    
    $http({ method: 'GET',url: 'ejercici91.json'}).then(function(resultado) {
      $scope.importeTotalPromesas = $scope.importeTotalPromesas + resultado.data.importe;
      return $http({method: 'GET',url: 'ejercici92.json'})
    }).then(function(resultado) {
      $scope.importeTotalPromesas = $scope.importeTotalPromesas + resultado.data.importe;
      return $http({method: 'GET',url: 'ejercici93.json'})
    }).then(function(resultado) {
      $scope.importeTotalPromesas = $scope.importeTotalPromesas + resultado.data.importe;
      return $http({method: 'GET',url: 'ejercici94.json'})
    }).then(function(resultado) {
      $scope.importeTotalPromesas = $scope.importeTotalPromesas + resultado.data.importe;
      $scope.mensajeFinalPromesas = "Ya hemos finalizado la lista de cálculos con promesas";
    })
    
}]);