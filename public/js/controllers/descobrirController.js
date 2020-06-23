angular.module('ecothink').controller('DescobrirController', function ($scope, $http, recursoLogin, recursoEvento, $rootScope) {
    recursoLogin.verify;
    $http.get($rootScope.api + '/evento')
        .then(response => {
            $scope.aleatorio = response.data;
            console.log(response.data)
        })
        .catch(error => console.warn(error))


});