# Config lambda functions in Astro project

To know about Astro, [README.md](https://github.com/devrebeleza/week4-common-layout/blob/master/README.md)

## Netlify Functions

...adds an entire serverless development and deployment pipeline to your project as part of your existing workflow, so we can use serverless functions to provide back-end services for our project.

### using default connection

We need netlify-cli package and config some files

```
npm install netlify-cli -global
```

add [netlify.tom](https://github.com/devrebeleza/week4-common-layout/blob/master/netlify.toml)

-- explicar la config de netlify.toml
https://github.com/cassidoo/shopify-react-astro/blob/main/netlify.toml

modify [package.json](https://github.com/devrebeleza/week4-common-layout/blob/master/package.json)

-- explicar el cambio en los comandos de ejecución en package.json
https://github.com/cassidoo/shopify-react-astro/blob/main/package.json

### Using express

if we want to use express to manage our http request, we need express and serverles-http packages

```
npm install express --save
npm install serverless-http -global
```

-- explicar sobre la codificación de express
-- realizar la llamada en login

## 🚀 Project Structure

Inside of our Astro project, you'll see the following folders and files (just show that we need):

```
/
├── functions/
│   ├── hello.js  (with handler)
│   ├── login.js  (whit express)
│   └── signup.js (whit express)
├── public/
├── src/
│   └── pages/
│       ├── login.astro
│       ├── index.astro
│       └── signup.astro
├── netlify.toml (new)
└── package.json  (modified)
```

-- explicar sobre la codificación de handler

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command          | Action                                     |
| :--------------- | :----------------------------------------- |
| `npm run start ` | Start local dev server at `localhost:3000` |
|                  | and Server on `localhost:8888`             |

## 👀 Where I founded all this? Bibliography

first lecture -> https://www.netlify.com/blog/2021/12/11/serverless-functions-made-simple-just-add-files/

step to step -> https://explorers.netlify.com/learn/up-and-running-with-serverless-functions/introduction-with-serverless-functions

1- Deploy an express js app to aws lambda [web](https://bitbucket.org/blog/deploy-an-express-js-app-to-aws-lambda-using-the-serverless-framework)

Feel free to check [our documentation](https://github.com/withastro/astro) or jump into our [Discord server](https://astro.build/chat).

oficial -> https://www.netlify.com/products/functions/?utm_campaign=featdaily21&utm_source=netlify&utm_medium=blog&utm_content=simple-serverless

docs -> https://www.netlify.com/blog/2021/07/23/build-a-modern-shopping-site-with-astro-and-serverless-functions/

obs: Error: "No se puede cargar el archivo .ps1 porque está deshabilitada la ejecución de scripts"
ejecutar en powershell (como administrador) Set-ExecutionPolicy Unrestricted
