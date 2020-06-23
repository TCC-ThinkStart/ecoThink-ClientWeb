angular.module('ecothink').controller('CalendarioController', function ($scope, $http, recursoLogin) {
    recursoLogin.verify;
    console.log('entrou no controller calendario');
    $scope.today = new Date();
});