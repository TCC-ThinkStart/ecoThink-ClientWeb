angular.module('ecothink').controller('CalendarioController',function($scope,$http){
    console.log('entrou no controller calendario');
    $scope.today = new Date();
});