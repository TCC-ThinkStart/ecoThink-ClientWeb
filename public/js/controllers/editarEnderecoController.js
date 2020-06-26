angular.module('ecothink').controller('EditarEnderecoController', function ($scope, $http, $rootScope, recursoLogin) {
    $rootScope.isLogin = false;

    $scope.enviar = (usuario) => {


        $http.post($rootScope.api + '/endereco/usuario/' + localStorage.getItem('code'), usuario)
            .then(results => {
                console.log(results)
                Swal.fire({
                    title: 'Endereço',
                    text: 'Endereço confirmado',
                    icon: 'success',
                })
            })
            .catch(error => console.error(error))
        usuario.idCidade = usuario.cidade.codigo;
        usuario.cidade = null;
        console.log(usuario)

    }

    $scope.verificar = (usuario) => {
        if (usuario) {
            $scope.isValid = true;
            return true
        } else {
            return false
        }
    }
    //chamando todas as cidades de SP
    $http.get($rootScope.api + '/cidade')
        .then(results => { $scope.municipios = results.data })
        .catch(error => console.error(error))
});