angular.module('ecothink').controller('EventosController', function ($scope, $rootScope, $http, recursoLogin) {

    recursoLogin.verify;

    $rootScope.isUser = true;

    $rootScope.isLogin = false;

    $rootScope.isDark = false;


    $http.get($rootScope.api + '/evento')
        .then(results => {
            $scope.events = results.data
        })
        .catch(error => console.warn(error))



});