angular.module('ecothink').controller('EventoController', function ($scope, $routeParams, $rootScope, $http, recursoLogin, recursoEvento, recursoEndereco, recursoUser) {

    recursoLogin.verify;

    $rootScope.isUser = true;

    $rootScope.isLogin = false;

    $rootScope.isDark = false;


    if ($routeParams.eventoId) {
        //apos isso armazenamos um resultado
        recursoEvento.get({ eventoId: $routeParams.eventoId }, (results) => {

            $scope.eventoUnico = results;
            //conversao para endereço
            recursoEndereco.get({ parametro: $scope.eventoUnico.idEndereco }, (enderecos) => {
                console.log(enderecos)
                $scope.eventoUnico.endereco = enderecos.logradouro + "," + enderecos.bairro + "," + enderecos.numero;
            })
            recursoUser.get({ usuarioId: $scope.eventoUnico.idOrganizador }, (usuario) => {
                console.log(usuario)
                $scope.eventoUnico.usuario = usuario.nome;
            })

        })

    }

});