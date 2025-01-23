### Projeto Pizzaria TypeScript mysql Api 2024

ultimo visto
```
https://www.udemy.com/course/dev-fullstack/learn/lecture/31683396#overview
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
[x] npm i bcryptjs
[x] npm i @types/bcryptjs -D
[x] npm i jsonwebtoken
[x] npm i @types/jsonwebtoken -D
    npm i dotenv

#### Endpoints

##### Users

##### Orders

##### Categorys

##### Products

#### Vercel Build
npm i -g vercel
vercel --prod
#####
{
    "version": 2,
    "builds": [
        { 
            "src": "./dist/server.js", 
            "use": "@now/node"
        }
    ],
    "routes": [
        { 
            "src": "/.*", 
            "dest": "/dist/server.js"
            }
    ]
}

#### Outs