angular.module('ecothink').controller('EditarPerfilController', function ($scope, $http, recursoLogin) {
    recursoLogin.verify;
    $scope.submitar = (usuario) => {
        if (usuario.nome && usuario.telefone && usuario.cpf) {
            $scope.isValidTell = true;
            $scope.isValid = true;
            return false
        } else {
            return true
        }
    }

    $scope.SelectFile = (e) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const valida = e.target.result.indexOf('data:image/')

            if (valida == 0) {
                //encriptada
                $scope.PreviewImage = e.target.result;
                $scope.$apply();
            } else {
                alert('favor insira uma imagem')
            }


        };

        reader.readAsDataURL(e.target.files[0]);

    }

    $scope.enviar = (usuario) => {

        console.log(usuario)
    }
});