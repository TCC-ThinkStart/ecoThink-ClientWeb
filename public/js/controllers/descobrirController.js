angular.module('ecothink').controller('DescobrirController', function ($scope, $http, recursoEvento, $rootScope) {

    $http.get($rootScope.api + '/evento')
        .then(response => {
            $scope.aleatorio = response.data;
            console.log(response.data)
        })
        .catch(error => console.warn(error))


});