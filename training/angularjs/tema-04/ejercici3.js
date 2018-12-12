var app = angular.module("app", []);

app.controller("PruebaController", ["$scope",function($scope) {
    $scope.filtroNombreProvincia = "";

    $scope.provincias = [{
      idProvincia: 1,
      nombre: "Palencia",
      comunidadAutonoma: "Castilla-Leon",
      idiomasCooficiales: false
    }, {
      idProvincia: 2,
      nombre: "Castellón",
      comunidadAutonoma: "Valencia",
      idiomasCooficiales: true
    }, {
      idProvincia: 3,
      nombre: "Alicante",
      comunidadAutonoma: "Valencia",
      idiomasCooficiales: true
    }];

    $scope.comparator = function(actual, expected) {
        if (actual.indexOf(expected)===0) {
          return true;
        } else {
          return false;
        }
    };   

    $scope.consultaPersonalizada=function(value) {
      if ((value.idiomasCooficiales===true) || (value.idProvincia>2)) {
        return true;
      } else {
        return false;
      }
    }
  }
]);