angular.module('ecothink').controller('EditarEnderecoController', function ($scope, $http, $rootScope, recursoLogin, recursoCity, recursoUser, recursoEndereco, cadastroDeEndereco) {
    recursoLogin.verify
    $rootScope.isLogin = false;

    $scope.validacao = (usuario) => {

        if (usuario.cep && usuario.numero && usuario.logradouro && usuario.bairro) {
            return true
        } else {
            return false
        }
    }
    //chamando todas as cidades de SP
    recursoCity.query((results) => $scope.municipios = results)

    //visualizando dados do usuario
    recursoUser.get({ usuarioId: recursoLogin.userCode }, (results) => {

        //verificando se o usuario possui endereço
        if (results.idEndereco == null) {

            // cadastroDeEndereco.cadastrar()
            $scope.submeter = (usuario) => {

                usuario.idCidade = usuario['cidade'].codigo
                usuario.cidade = null

                $http.post($rootScope.api + '/endereco/usuario/' + recursoLogin.userCode, usuario)
                    .then(result => {
                        const mensagem = result.data.success;
                        Swal.fire({
                            icon: 'success',
                            title: 'Endereço',
                            text: mensagem,
                        })
                    })
                    .catch(error => {

                        Swal.fire({
                            icon: 'error',
                            title: 'Erro',
                            text: 'Favor Altere algum dado e tente Novamente!',
                        })
                        console.log(error)
                    })
            }
        }
        else {
            //capturando endereco
            recursoEndereco.get({ parametro: results.idEndereco }, (endereco) => {

                $scope.usuario = endereco
                //parametros passados pelo usuario
                $scope.submeter = (usuario) => {
                    $http.put($rootScope.api + '/endereco/usuario/' + recursoLogin.userCode, usuario)
                        .then(result => {
                            const mensagem = result.data.success;
                            Swal.fire({
                                icon: 'success',
                                title: 'Endereço',
                                text: mensagem,
                            })
                        })
                        .catch(error => {

                            Swal.fire({
                                icon: 'error',
                                title: 'Erro',
                                text: 'Favor Altere algum dado e tente Novamente!',
                            })
                            console.log(error)
                        })
                }
                // cadastroDeEndereco.cadastrar()
            })
        }
    })
});