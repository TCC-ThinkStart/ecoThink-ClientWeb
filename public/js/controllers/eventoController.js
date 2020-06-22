angular.module('ecothink').controller('EventoController', function ($scope, $routeParams, $rootScope, $http, recursoLogin, recursoEvento) {

    recursoLogin.verify;

    $rootScope.isUser = true;

    $rootScope.isLogin = false;

    $rootScope.isDark = false;


    if ($routeParams.eventoId) {
        //apos isso armazenamos um resultado
        recursoEvento.get({ eventoId: $routeParams.eventoId }, (results) => {
            console.log(results);
            $scope.eventoUnico = results;
        })
    }

});