### Projeto Pizzaria TypeScript mysql Api 2024

ultimo visto
```
https://www.udemy.com/course/dev-fullstack/learn/lecture/31683392#overview
```
#### Dependencias iniciais
npm init -y

npm i typescript -D

npm i express @types/express

npx tsc --init

npm i ts-node-dev -D

npm i express-async-errors

npm i cors @types/cors

#### Config pacakge.json
"scripts": {
    "dev": "ts-node-dev src/server.ts"
},

#### Prisma ORM
[x] npm install prisma --save-dev
[x] npm install @prisma/client
[x] npx prisma init --datasource-provider mysql
[x] npx prisma migrate dev


#### Criptografia / JWT
npm i bcryptjs
npm i @types/bcryptjs -D

npm i jwt

#### Endpoints

##### Users

##### Orders

##### Categorys

##### Products

#### Outs