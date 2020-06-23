angular.module('ecothink').controller('CriarEventosController', function ($scope, $rootScope, $http, recursoLogin) {
    recursoLogin.verify;

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