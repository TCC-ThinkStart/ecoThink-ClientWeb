angular.module('ecothink').controller('CriarEventos2Controller', function ($scope, $rootScope, $http, recursoLogin, recursoCity) {
    recursoLogin.verify;
    $rootScope.isLogin = false;

    recursoCity.query((results) => $scope.municipios = results)


    let event = []
    event = JSON.parse(sessionStorage.getItem('event')) || [];
    $scope.evento = event;



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
    $scope.imgRemove = () => {
        $scope.PreviewImage = null;
    }

    $scope.enviar = (events) => {




        event.push(events)

        sessionStorage.setItem('event', JSON.stringify(event));

        $scope.evento = event


    }
    $scope.inserir = () => {
        //capturando todos os dados do sessionStorage
        $scope.eventoEnviar = $scope.evento[0]
        //arrumar data
        const datainit = $scope.eventoEnviar.dataInicio;
        const diainit = datainit.substr(0, 2);
        const mesinit = datainit.substr(2, 2);
        const anoinit = datainit.substr(4, 4);
        const dataFormatadainit = anoinit + "-" + mesinit + "-" + diainit;
        $scope.eventoEnviar.dataInicio = dataFormatadainit;
        //
        const dataEnd = $scope.eventoEnviar.dataFinal;
        const diaEnd = dataEnd.substr(0, 2);
        const mesEnd = dataEnd.substr(2, 2);
        const anoEnd = dataEnd.substr(4, 4);
        const dataFormatadaEnd = anoEnd + "-" + mesEnd + "-" + diaEnd;
        $scope.eventoEnviar.dataFinal = dataFormatadaEnd;
        //requisição de endereço
        $scope.eventoEnviar.idOrganizador = parseInt(recursoLogin.userCode);
        $scope.eventoEnviar.cep = $scope.evento[1].cep
        $scope.eventoEnviar.logradouro = $scope.evento[1].logradouro
        $scope.eventoEnviar.bairro = $scope.evento[1].bairro
        $scope.eventoEnviar.numero = $scope.evento[1].numero
        $scope.eventoEnviar.idCidade = $scope.evento[1]['cidade'].codigo
        $scope.eventoEnviar['cidade'] = null

        console.log($scope.eventoEnviar)

        // $http.post($rootScope.api + '/evento', $scope.eventoEnviar)
        //     .then(event => {
        //         $scope.eventoEnviar.foto = { base64: $scope.PreviewImage }
        //         $http.post($rootScope.api + '/foto/usuario/' + recursoLogin.userCode + '/evento/' + event.data.codigo, $scope.eventoEnviar.foto)
        //             .then(foto => {

        //                 if (foto.data) {
        //                     const msg = 'Evento Criado Com Sucesso!'

        //                     console.log(foto.idEvento)

        //                     Swal.fire({
        //                         title: 'Evento',
        //                         text: msg,
        //                         icon: 'success',
        //                     })
        //                 }

        //             })
        //             .catch(erro => console.error(erro))
        //     })
        //     .catch(error => console.error)



        sessionStorage.clear()

    }
}); 