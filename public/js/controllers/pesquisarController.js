angular.module('ecothink').controller('PesquisarController', function ($rootScope, $scope, $http, $location, $window, recursoCity) {
    $rootScope.isLogin = false;
    $rootScope.isUser = true;
    $rootScope.isDark = false;


    recursoCity.query((results) => $scope.municipios = results)
});