angular.module('ecothink').controller('EditarEnderecoController', function ($scope, $http, $rootScope, recursoLogin, recursoCity, recursoUser) {
    recursoLogin.verify
    $rootScope.isLogin = false;

    //chamando todas as cidades de SP
    recursoCity.query((results) => $scope.municipios = results)

    //visualizando dados do usuario
    recursoUser.get({ usuarioId: recursoLogin.userCode }, (results) => {
        console.log(results)

    })
});