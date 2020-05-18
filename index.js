const customExpress = require('./config/customExpress');
const port = 3000;

const app = customExpress();
    //servidor
    app.listen(port,()=>{
        console.log('Servidor Iniciado e Rodando no link http://localhost:'+port);
    })