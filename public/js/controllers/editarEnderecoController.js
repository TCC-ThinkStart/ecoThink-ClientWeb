angular.module('ecothink').controller('EditarEnderecoController', function ($scope, $http, $rootScope, recursoLogin) {
    $rootScope.isLogin = false;

    $scope.enviar = (usuario) => {

        usuario.idCidade = usuario.cidade.codigo;
        usuario.cidade = null;
        console.log(usuario)

    }
    //chamando todas as cidades de SP
    $http.get($rootScope.api + '/cidade')
        .then(results => { $scope.municipios = results.data })
        .catch(error => console.error(error))
});