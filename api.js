/*
    Application Programming Interface -> Conjunto de regras que permite que aplicações de software se comuniquem entre si;

    REST - Representational State Transfer -> Conjunto de regras de boas práticas para a criação de Apis escaláveis(É uma API que cosnegue crescer ou diminuir de acordo com a procura, mantendo a estabilidade e o desempenho), algumas regras principais:
   
    - GET -> Pegar Informações;
    - POST -> Criar informações na sua API;
    - PUT / PATCH -> Alterar algo que já existe;
    - DELETE -> Apagar alguma informação da sua API;

    Request -> É o pedido;
    Response -> É a resposta que eu vou dar;

    Toda requisição feita pelo url do navegador é do tipo GET;

    JSON - JavaScript Object Notation -> Notação de objetos em JavaScript;
*/ 

import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 3000;
let arrResponse = [{ id:"1", name: "Diego", company: "Hastag Programação" }, { id:"2", name: "Alon", company: "Hastag Treinamentos" }];

app.get('/', (req, res) => {
    res.json(arrResponse);
})

app.post('/create', (req, res) => {
    const value = req.body;
    arrResponse.push(value);
    res.send(arrResponse);
})

app.put('/update', (req, res) => {
    const value = req.body;
    arrResponse.find((item) => {
        if (item.id == value.id) {
            item.name = value.name;
            item.company = value.company;
        }
    })
    res.send(arrResponse);
})

app.delete('/delete', (req, res) => {
    const value = req.body;
    const item = arrResponse.find((item) => item.id == value.id)
    console.log(item)
    const index = arrResponse.indexOf(item)
    arrResponse.splice(index, 1)
    res.status(200).send(arrResponse);

})

app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));