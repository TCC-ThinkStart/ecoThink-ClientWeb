angular.module('ecothink').controller('EditarPerfilController', function ($scope, $http, recursoLogin, recursoFotoUser, $rootScope) {
    recursoLogin.verify;
    $rootScope.isLogin = false;
    $rootScope.isUser = true;

    $scope.nome = recursoLogin.getName;
    console.log($scope.nome)

    $scope.SelectFile = (e) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const valida = e.target.result.indexOf('data:image/')

            if (valida == 0) {
                //encriptada
                $scope.PreviewImage = e.target.result;
                $scope.$apply();
                $scope.adicionaImagem = true;
                console.log
            } else {
                alert('favor insira uma imagem')
            }


        };

        reader.readAsDataURL(e.target.files[0]);

    }

    $scope.enviar = (usuario) => {


        if ($scope.adicionaImagem) {

        }
        console.log(usuario)
    }
});