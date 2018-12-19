var translationsEN = {
  HEADLINE: 'What an awesome module!',
  PARAGRAPH: 'Srsly!',
  PASSED_AS_TEXT: 'Hey there! I\'m passed as text value!',
  PASSED_AS_ATTRIBUTE: 'I\'m passed as attribute value, cool ha?',
  PASSED_AS_INTERPOLATION: 'Beginners! I\'m interpolated!',
  VARIABLE_REPLACEMENT: 'Hi {{nombre}}',
  BUTTON_LANG_ES: 'Spanish',
  BUTTON_LANG_EN: 'English'
};

var translationsES= {
  HEADLINE: '¡Qué módulo asombroso!',
  PARAGRAPH: '¡En serio!',
  PASSED_AS_TEXT: 'Hola, me están pasando como un texto',
  PASSED_AS_ATTRIBUTE: 'Me están pasando como atributo, ¡qué bueno!',
  PASSED_AS_INTERPOLATION: '¡Aprendices! A mí me están interpolando ...',
  VARIABLE_REPLACEMENT: 'Hola {{nombre}}',
  BUTTON_LANG_ES: 'Español',
  BUTTON_LANG_EN: 'Inglés'
};

var app = angular.module('myApp', ['pascalprecht.translate']);
 
app.config(['$translateProvider', function ($translateProvider) {
// agregar la tabla de traducción
$translateProvider.translations('en', translationsEN);
$translateProvider.translations('es', translationsES);
$translateProvider.preferredLanguage('es');
$translateProvider.fallbackLanguage('en');
}]);

app.controller('Ctrl', ['$translate', '$scope', function ($translate, $scope) {

$scope.changeLanguage = function (langKey) {
  $translate.use(langKey);
};
}]);