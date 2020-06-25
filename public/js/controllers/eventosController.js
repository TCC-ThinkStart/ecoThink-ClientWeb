angular.module('ecothink').controller('EventosController', function ($scope, $rootScope, $http, recursoLogin, recursoUser, recursoEndereco, recursoEvento) {

    recursoLogin.verify;

    $rootScope.isUser = true;

    $rootScope.isLogin = false;

    $rootScope.isDark = false;

    //capturando evento
    recursoEvento.query((results) => {
        $scope.events = results
        for (let c = 0; c <= results.length; c++) {
            recursoUser.get({ usuarioId: $scope.events[c].idOrganizador }, (usuario) => {
                $scope.events[c].usuario = usuario.nome;
            })
            recursoEndereco.get({ parametro: $scope.events[c].idEndereco }, (endereco) => {
                $scope.events[c].endereco = endereco.logradouro + ' - ' + endereco.numero + ',' + endereco.bairro;
            })
        }
    }, (error) => {
        console.error(error)
    })





});