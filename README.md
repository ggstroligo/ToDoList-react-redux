# Lista de Tarefas

## Visão Geral
Esta é uma aplicação simples Single Page, que tem as operações básicas de um **CRUD**, os dados são armazenados em um banco **MongoDB**. Feita com o intuito de aprender e praticar habilidades com a junção dos frameworks **React+Redux**. A parte front-end tem o código feito apenas em react e na outra pasta, tem o mesmo projeto integrado com Redux.

A aplicação dá as opções de **adicionar** uma tarefa, **excluir** uma tarefa, marcar a tarefa como **realizada**, marcar a tarefa como **não realizada**, e contém uma **navegação** simples, para praticar o roteamento.

## Instalação

> É necessário ter [NodeJS + NPM](https://nodejs.org/) instalado para baixar todas as dependências, e  o banco de dados [MongoDB](www.mongodb.com).
> Em cada pasta individualmente, rode o seguinte código no terminal:
```
$ npm install
```
> Depois de instaladas as dependências, é necessário uma instância do [MongoDB](www.mongodb.com) ligada no localhost, para isso abra o terminal e digite:
```
$ mongod
```
> Depois, rode o servidor BackEnd, que provê uma API para as requisições da aplicação, e no FrontEnd, o servidor de desenvolvimento para testes do webpack 
```
$ cd backend
$ npm run dev 
$ cd ../frontend-redux/ 
ou 
$ cd ../frontend/
$ npm run dev
```
> Pronto, o servidor da API irá rodar na porta 3003 e o Front na porta 8090, que pode ser alterada no arquivo webpack.config.js