angular.module('ecothink').controller('EditarPerfilController', function ($scope, $http, recursoLogin, recursoFotoUser, cadastroDeFotoPerfil, $rootScope) {
    recursoLogin.verify;
    $rootScope.isLogin = false;
    $rootScope.isUser = true;
    recursoLogin.setProfile;
    $scope.PreviewImage = $rootScope.api + '/' + recursoLogin.getProfile;
    $scope.nome = recursoLogin.getName;


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
            usuario.foto = { base64: $scope.PreviewImage, codigo: parseInt(recursoLogin.userCode) }

            cadastroDeFotoPerfil.cadastrar(usuario.foto)
                .then(results => {
                    $scope.mensagem = results.mensagem;
                    const mensagem = results.mensagem;
                    Swal.fire({
                        title: 'Foto',
                        text: mensagem,
                        icon: 'success',
                    })
                    console.log(results)
                })
                .catch(error => {
                    $scope.mensagem = error.mensagem;
                    console.log(error)
                })
        }
        console.log(usuario)
    }
});