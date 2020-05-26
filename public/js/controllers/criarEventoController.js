angular.module('ecothink').controller('CriarEventosController',function($scope,$rootScope,$http){
    console.log('entrou no controller de eventos')

    $rootScope.isUser =true;

    $rootScope.isLogin = false;

    $rootScope.isDark = true;

    $scope.SelectFile = (e) => {
        const reader = new FileReader();
        reader.onload = (e)=> {
            $scope.PreviewImage = e.target.result;
            $scope.$apply();
        };

        reader.readAsDataURL(e.target.files[0]);
    };

});