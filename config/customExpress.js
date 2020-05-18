const express = require('express');
const bodyParser = require('body-parser');
const path    = require('path');

module.exports = ()=>{
    //criando app
    const app = express();
    //midwares
    //arquivos
    app.use(express.static('./public'));
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());

    //habilitando Html5
    app.all('/*',(req,res)=>{
        res.sendFile(path.resolve('public/index.html'));
    });

    return app;
}