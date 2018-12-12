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
});
