angular.module('ecothink').controller('CriarEventosController',function($scope,$rootScope,$http){
    console.log('entrou no controller de eventos')

    $rootScope.isUser =true;

    $rootScope.isLogin = false;

    $rootScope.isDark = true;

    $scope.SelectFile = (e) => {
        const reader = new FileReader();
        reader.onload = (e)=> {
            const valida  = e.target.result.indexOf('data:image/')

            if(valida == 0 ){
            //encriptada
            $scope.PreviewImage = e.target.result;
            $scope.$apply();
            }else{
                alert('favor insira uma imagem')
            }
            
            
        };
       
        reader.readAsDataURL(e.target.files[0]);
        console.log('entrou')
    };
    $scope.submit = (event)=>{
        event.img = $scope.PreviewImage;
        console.log(event)

       $http.post('http://localhost:4200/upload',event)
       .then(results=>{
           console.log(results)
       })
       .catch(error=>console.error)
    
    }
    $scope.imgRemove = ()=>{
        $scope.PreviewImage = null;
    }
    
});