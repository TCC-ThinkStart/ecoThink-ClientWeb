angular.module('ecothink').controller('PerfilController', function ($scope, $rootScope, $http, $location, recursoLogin) {

    recursoLogin.verify;
    recursoLogin.setProfile;
    $scope.imageProfile = $rootScope.api + '/' + atob(recursoLogin.getProfile);
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


});