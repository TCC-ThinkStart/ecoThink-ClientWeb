angular.module('ecothink').controller('EditarPerfilController', function ($scope, $http, recursoLogin, recursoFoto, recursoFotoUser, cadastroDeFotoPerfil, recursoUser, cadastroDeUsuario, $rootScope) {
    recursoLogin.verify;
    $rootScope.isLogin = false;
    $rootScope.isUser = true;
    recursoLogin.setProfile;
    //$scope.PreviewImage = $rootScope.api + '/' + recursoLogin.getProfile;
    $scope.nome = recursoLogin.getName;



    recursoUser.get({ usuarioId: recursoLogin.userCode }, (results) => {
        $scope.usuario = results
        // capturando o id de foto de perfil para mostrar
        recursoFoto.get({ usuarioId: results.idFotoPerfil }, (foto) => {
            $scope.PreviewImage = $rootScope.api + '/' + foto.url
        })
    })

    $scope.SelectFile = (e) => {

        const reader = new FileReader();
        reader.onload = (e) => {
            const valida = e.target.result.indexOf('data:image/')

            if (valida == 0) {
                //encriptada
                $scope.PreviewImage = e.target.result;
                $scope.$apply();
                $scope.adicionaImagem = true;

            } else {
                alert('favor insira uma imagem')
            }


        };

        reader.readAsDataURL(e.target.files[0]);

    }

    $scope.enviar = (usuario) => {
        usuario.codigo = localStorage.getItem('code')

        if ($scope.adicionaImagem) {
            // verificando se foto de perfil foi inserida
            if (usuario.idFotoPerfil == null) {
                usuario.foto = { base64: $scope.PreviewImage }
                recursoFotoUser.save({ usuarioId: usuario.codigo }, usuario.foto, results => {
                    const mensagem = results.success
                    Swal.fire({
                        title: 'Foto',
                        text: mensagem,
                        icon: 'success',
                    })
                }, error => {
                    const mensagem = error.error
                    Swal.fire({
                        title: 'Foto',
                        text: mensagem,
                        icon: 'error',
                    })
                })
            } else {
                usuario.foto = { base64: $scope.PreviewImage, codigo: parseInt(recursoLogin.userCode) }

                cadastroDeFotoPerfil.cadastrar(usuario.foto)
                    .then(results => {
                        $scope.mensagem = results.mensagem;
                        const mensagem = results.mensagem;
                        $scope.$broadcast('fotoPerfilCadastrada');
                        Swal.fire({
                            title: 'Foto',
                            text: mensagem,
                            icon: 'success',
                        })

                    })
                    .catch(error => {
                        $scope.mensagem = error.mensagem;
                        console.log(error)
                    })

                usuario.foto = null
            }

        }


        const auth = localStorage.getItem('auth')
        if (auth == 'ADM') {
            $http.put($rootScope.api + '/usuario/organizacao/' + usuario.codigo, usuario)
                .then(results => {
                    console.log(results)
                    $scope.mensagem = results.data.success;
                    const mensagem = results.data.success;
                    Swal.fire({
                        title: 'Usuario',
                        text: mensagem,
                        icon: 'success',
                    })
                })
                .catch(error => {
                    const mensagem = error.error;
                    Swal.fire({
                        title: 'Erro',
                        text: mensagem,
                        icon: 'error',
                    })
                })
        }
        else if (auth == 'USU') {
            cadastroDeUsuario.cadastrar(usuario)
                .then(results => {
                    $scope.mensagem = results.mensagem;
                    const mensagem = results.mensagem;
                    Swal.fire({
                        title: 'Usuario',
                        text: mensagem,
                        icon: 'success',
                    })
                    console.log(results)
                })
                .catch(error => console.warn(error))
        }
    }
});