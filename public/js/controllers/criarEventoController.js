angular.module('ecothink').controller('EditarEventosController', function ($routeParams, $location, $scope, $rootScope, $http, recursoLogin, recursoCity, cadastroDeEventos, recursoEndereco, recursoEvento) {
    recursoLogin.verify;
    // recursoLogin.setProfile;

    $rootScope.isUser = true;

    $rootScope.isLogin = false;

    if ($routeParams.eventoId) {
        $scope.PreviewImage = $rootScope.api + '/' + recursoLogin.getProfile;

        //apos isso armazenamos um resultado
        recursoEvento.get({ eventoId: $routeParams.eventoId }, (results) => {
            $scope.event = results

        })

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

        };
        $scope.submit = (event) => {
            console.log(event)
            cadastroDeEventos.cadastrar(event)
                .then(results => {
                    console.log(results)
                    $scope.mensagem = results.mensagem;
                    const mensagem = results.mensagem;
                    Swal.fire({
                        title: 'Evento',
                        text: mensagem,
                        icon: 'success',
                    })
                    const codeEvent = results.codigo;

                })
                .catch(error => {
                    $scope.mensagem = error.mensagem;
                    Swal.fire({
                        title: 'Evento',
                        text: $scope.mensagem,
                        icon: 'error',
                    })
                    console.log(error)
                })


            console.log(event)
        }
        $scope.imgRemove = () => {
            $scope.PreviewImage = null;
        }


        //chamando todas as cidades de SP
        recursoCity.query((results) => $scope.municipios = results)

        $scope.remover = () => {
            recursoEvento.delete({ eventoId: $routeParams.eventoId }, (deletar) => {
                const mensagem = deletar.success;
                console.log(deletar)
                Swal.fire({
                    title: 'Evento',
                    text: mensagem,
                    icon: 'success',
                })
                $location.path('/user/perfil');
            }, (error) => {
                const mensagem = error.data.error;
                Swal.fire({
                    title: 'Evento',
                    text: mensagem,
                    icon: 'error',
                })
            })
        }

    }


});