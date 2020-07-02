angular.module('ecothink').controller('PerfilController', function ($scope, $rootScope, $http, $location, $interval, recursoLogin, recursoFoto, recursoUser, recursoEndereco, recursoCity, $cookies) {

    recursoLogin.verify;
    //verificando se foto de perfil foi atualizada
    recursoFoto.get({ usuarioId: localStorage.getItem('codeProfile') }, (results) => {
        $cookies.put('x-access-user', window.btoa(results.url) + '.' + window.btoa(results.codigo))
        $scope.imageProfile = $rootScope.api + '/' + recursoLogin.getProfile;
    })
    recursoEndereco.get({ parametro: recursoLogin.userCode }, (endereco) => {
        $scope.endereco = endereco.logradouro + ',' + endereco.numero
    })
    recursoUser.get({ usuarioId: recursoLogin.userCode }, (results) => {
        $scope.nome = results.nome
    })

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
        console.log(x)
        console.log(x.codigo)
        $location.path('user/editarevento/' + x.codigo)
    }

});