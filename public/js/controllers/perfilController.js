angular.module('ecothink').controller('PerfilController', function ($scope, $rootScope, $http, $location, $interval, recursoLogin, recursoFoto, recursoUser, recursoEndereco, recursoCity, $cookies) {

    recursoLogin.verify;
    //verificando se foto de perfil foi atualizada
    recursoUser.get({ usuarioId: recursoLogin.userCode }, (usuario) => {
        // capturando o id de foto de perfil para mostrar
        recursoFoto.get({ usuarioId: usuario.idFotoPerfil }, (foto) => {
            $scope.imageProfile = $rootScope.api + '/' + foto.url
        })
    })

    $http.get($rootScope.api + '/usuario/' + recursoLogin.userCode)
    .then(results => {
        let idEndereco = results.data.idEndereco;

        if(idEndereco){
            recursoEndereco.get({ parametro: idEndereco }, (endereco) => {
                $scope.endereco = endereco.logradouro + ',' + endereco.numero
            })
        }else{
            $scope.endereco = "Endereço não cadastrado";
        }
    })
    .catch(error => console.log(error));

    // Implementação antiga
    // recursoEndereco.get({ parametro: recursoLogin.userCode }, (endereco) => {
    //     $scope.endereco = endereco.logradouro + ',' + endereco.numero
    // })
    recursoUser.get({ usuarioId: recursoLogin.userCode }, (results) => {
        $scope.nome = results.nome
    }, (error) => console.log(error))

    //https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
    $rootScope.isLogin = false;
    $rootScope.isUser = true;
    $rootScope.isDark = false;




    //sair
    $scope.logout = () => {
        localStorage.clear();
        $location.path('home')
    }

    $scope.userName = localStorage.getItem('userName')


    $http.get($rootScope.api + '/evento/usuario/' + recursoLogin.userCode)
        .then(result => $scope.eventos = result.data)
        .catch(error => console.error)

    $scope.enviar = (x) => {

        $location.path('user/editarevento/' + x.codigo)
    }

});