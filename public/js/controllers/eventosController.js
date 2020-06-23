angular.module('ecothink').controller('EventosController', function ($scope, $rootScope, $http, recursoLogin, recursoUser, recursoEndereco) {

    recursoLogin.verify;

    $rootScope.isUser = true;

    $rootScope.isLogin = false;

    $rootScope.isDark = false;

    //capturando evento
    $http.get($rootScope.api + '/evento')
        .then(results => {
            $scope.events = results.data
            for (let c = 0; c <= results.data.length; c++) {
                recursoUser.get({ usuarioId: $scope.events[c].idOrganizador }, (usuario) => {
                    $scope.events[c].usuario = usuario.nome;
                })
                recursoEndereco.get({ parametro: $scope.events[c].idEndereco }, (endereco) => {
                    $scope.events[c].endereco = endereco.logradouro + ' - ' + endereco.numero + ',' + endereco.bairro;
                })
                console.log($scope.events)
            }

        })
        .catch(error => console.warn(error))



});