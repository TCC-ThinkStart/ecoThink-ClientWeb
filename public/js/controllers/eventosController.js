angular.module('ecothink').controller('EventosController', function ($scope, $rootScope, $http, recursoLogin, recursoUser) {

    recursoLogin.verify;

    $rootScope.isUser = true;

    $rootScope.isLogin = false;

    $rootScope.isDark = false;

    //capturando evento
    $http.get($rootScope.api + '/evento')
        .then(results => {
            $scope.events = results.data
            console.log($scope.events)
            console.log(results.data.length)
            for (let c = 0; c <= results.data.length; c++) {
                recursoUser.get({ usuarioId: $scope.events[c].idOrganizador }, (usuario) => {
                    console.log(usuario.nome)
                    console.log($scope.events[c].idOrganizador)
                    $scope.events[c].usuario = usuario.nome;
                })
                console.log($scope.events)
            }

        })
        .catch(error => console.warn(error))



});