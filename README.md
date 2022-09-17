![Cover](https://i.imgur.com/YoW0tUL.png)
Aplicação full-stack desenvolvida para encontrar um duo em múltiplos jogos, construída na NLW da [Rocketseat](https://www.rocketseat.com.br).

# Tabela de conteúdos

<!--ts-->
 * [Sobre](#Sobre) 
 * [Pré-requisitos](#pre-requisitos) 
* [Instalação](#instalacao) 
	 * [Executando o servidor](#servidor) 
	 * [Executando o web](#web) 
	 * [Executando o mobile](#mobile) 
 * [Tecnologias](#tecnologias) 
<!--te-->
# Pré-requisitos
Os requisitos para a execução da aplicação são:
 * [NPM](https://nodejs.org/en/)
 * [IDE](https://code.visualstudio.com)
 * [Smartphone](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US) / [Emulador mobile](https://developer.android.com/)

# Instalação
Comece clonando o repositório: 

    
	$ git clone https://github.com/divinityMaker/nlw-esports-ignite-2022
	$ cd nlw-esports-ignite-2022
Instale o expo globalmente:

    $  npm i -g expo-cli
Crie o arquivo .env na pasta do servidor:

    $ cd server
    $ type nul > .env

Dentro do arquivo .env

    DATABASE_URL="file:../src/database/db.sqlite"

### Executando o servidor:

	$ cd server
    $ npm install
    $ npx prisma generate
    $ npm run dev

### Executando o web:

    $ cd web
    $ npm install
    $ npm run dev

### Executando o mobile:

    $ cd mobile
    $ npm install
    $ expo start

# Resultado
### Aplicação web
![enter image description here](https://i.imgur.com/fm5WLzT.png)
### Aplicação mobile
![enter image description here](https://i.imgur.com/ekYCJeW.jpg)
# Tecnologias 
### Global
 - [Typescript](https://www.typescriptlang.org) 
 
### Web
 -  [Vitejs](https://vitejs.dev) 
 - [Reactjs](https://reactjs.org) 

### Mobile
 - [React Native](https://reactnative.dev)
 - [Expo](https://expo.dev) 
 
### Server
- [Nodejs](https://nodejs.org/en/) 
 - [Prisma](https://www.prisma.io)

