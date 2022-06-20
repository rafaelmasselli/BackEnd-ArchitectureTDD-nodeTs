<h1 align="center"> ⚡ API com Node, TS e Typeorm ⚡</h1>

## Descrição

### Projeto feito para estudar o TDD Test Driven Development, ou Desenvolvimento Orientado a Testes

![ciclo do tdd](/.github/TDD.png)

## 📝 Requisitos

### Para iniciar o projeto em máquina você vai precisar ter o <a href="https://nodejs.org/pt-br/download/">Node JS</a> e para starta o projeto você vai precisar de uma <a href="https://code.visualstudio.com/download">IDE</a>

### para clonar o projeto você vai precisa do <a href="https://git-scm.com/">Git</a>

## ☕ Iniciando o projeto

### no terminal clone o projeto

```bash
# Clonando o projeto
> git clone https://github.com/
```

### Criando um banco Sqlite

```bash
 $ yarn typeorm migration:run && npm typeorm migration:run
```

### Instalando e iniciando o projeto

```bash
# ja na pasta do projeto instale as dependências
$ npm install && yarn add

# Iniciando o projeto
$ npm run dev && yarn dev
```

### Aplicando os teste do jest TDD

```bash
# Testando com yarn
$ yarn jest && yarn test

# Testando com npm
$ npm jest && npm test
```

## Rotas da aplicação

- [x] GET | http://localhost:5000/users
- [x] POST | http://localhost:5000/addUser
- [x] DELETE | http://localhost:5000/user/delete
- [x] PATCH | http://localhost:5000/user/update

## Dependências instaladas

- [x] TypeScript node
- [x] Express
- [x] Jest
- [x] Sqlite
