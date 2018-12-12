var app = angular.module('MyApp', []);
app.controller('questionController', function($scope){
   //objeto pregunta
   $scope.pregunta = {
      id: 1,
      premisa: '¿Amb quin llenguatge esta basat el Framework AngularJS?',
      respostes: [
         {
            id: 1,
            text: 'Javascript',
            active: 'false'
         },
         {
            id: 2,
            text: 'PHP',
            active: 'false'
         },
         {
            id: 3,
            text: 'Java',
            active: 'false'
         },
         {
            id: 4,
            text: 'NodeJs',
            active: 'false'
         }
      ]
   };
   $scope.marcar = function(){
      angular.forEach($scope.pregunta.respostes, function(value, key) {
         value.active = false;
      });
      this.key.active = true;
   };
   $scope.respostes = [];
   $scope.respondre = function(){
      angular.forEach($scope.pregunta.respostes, function(resposta, i) {
         if (resposta.active)
            $scope.respostes.push({ id:$scope.id, key:resposta.id });
      });
   };
});
