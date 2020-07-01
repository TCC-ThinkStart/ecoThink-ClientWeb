angular.module('ecothink').controller('EditarEnderecoController', function ($scope, $http, $rootScope, recursoLogin, recursoCity, recursoUser, recursoEndereco) {
    recursoLogin.verify
    $rootScope.isLogin = false;
    $scope.optionValidations = "formulario.cep.$dirty && formulario.cep.$invalid"
    $scope.validacao = (usuario) => {

        if (usuario.cep && usuario.numero && usuario.logradouro) {
            console.log('numero tem dado')
            return true
        } else {
            console.log('numero nao tem')
            return false
        }
    }
    //chamando todas as cidades de SP
    recursoCity.query((results) => $scope.municipios = results)

    //visualizando dados do usuario
    recursoUser.get({ usuarioId: recursoLogin.userCode }, (results) => {
        console.log(results)
        //verificando se o usuario possui endereço
        if (results.idEndereco == null) {

            // cadastroDeEndereco.cadastrar()
        }
        else {
            //capturando endereco
            recursoEndereco.get({ parametro: results.idEndereco }, (endereco) => {
                console.log(endereco)
                $scope.usuario = endereco

                // cadastroDeEndereco.cadastrar()
            })
        }
    })
});