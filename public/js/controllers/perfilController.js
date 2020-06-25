angular.module('ecothink').controller('PerfilController', function ($scope, $rootScope, $http, $location, $interval, recursoLogin, recursoFoto, $cookies) {

    recursoLogin.verify;
    //verificando se foto de perfil foi atualizada
    $scope.imageProfile = $rootScope.api + '/' + recursoLogin.getProfile;

    //https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
    $rootScope.isLogin = false;
    $rootScope.isUser = true;
    $rootScope.isDark = false;

    recursoFoto.get({ usuarioId: localStorage.getItem('codeProfile') }, (results) => {

        $cookies.put('x-access-user', window.btoa(results.url) + '.' + window.btoa(results.codigo))
    })


    //sair
    $scope.logout = () => {
        localStorage.clear();
        $location.path('home')
    }

    $scope.userName = localStorage.getItem('userName')


});