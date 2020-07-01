angular.module('ecothink').controller('CriarEventos2Controller', function ($scope, $rootScope, $http, recursoLogin, cadastroDeEventos) {
    recursoLogin.verify;
    recursoLogin.setProfile;
    $scope.PreviewImage = $rootScope.api + '/' + recursoLogin.getProfile;
    $rootScope.isUser = true;

    $rootScope.isLogin = false;

    $rootScope.isDark = true;

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
        //arrumar data
        const datainit = event.dataInicio;
        const diainit = datainit.substr(0, 2);
        const mesinit = datainit.substr(2, 2);
        const anoinit = datainit.substr(4, 4);
        const dataFormatadainit = anoinit + "-" + mesinit + "-" + diainit;
        event.dataInicio = dataFormatadainit;
        //
        const dataEnd = event.dataFinal;
        const diaEnd = dataEnd.substr(0, 2);
        const mesEnd = dataEnd.substr(2, 2);
        const anoEnd = dataEnd.substr(4, 4);
        const dataFormatadaEnd = anoEnd + "-" + mesEnd + "-" + diaEnd;
        event.dataFinal = dataFormatadaEnd;
        event.idOrganizador = parseInt(recursoLogin.userCode);
        event.idCidade = event['cidade'].codigo
        event['cidade'] = null


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
                event.foto = { base64: $scope.PreviewImage }
                $http.post('/foto/usuario/' + localStorage.getItem('code') + '/evento/' + codeEvent, event.foto)
                    .then(result => {
                        console.log(results)
                    })
                    .catch(error => {
                        console.error(error)
                    })
            })
            .catch(error => {
                $scope.mensagem = error.mensagem;
                console.log(error)
            })


        console.log(event)
    }
    $scope.imgRemove = () => {
        $scope.PreviewImage = null;
    }


    //chamando todas as cidades de SP
    $http.get($rootScope.api + '/cidade')
        .then(results => { $scope.municipios = results.data })
        .catch(error => console.error(error))
});