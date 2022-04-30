# Config Lambda Functions in Astro project

To know about Astro, [README.md](https://github.com/devrebeleza/week4-common-layout/blob/master/README.md)

## Netlify Functions

...adds an entire serverless development and deployment pipeline to your project as part of your existing workflow, so we can use serverless functions to provide back-end services for our project.

### Using default connection

We need netlify-cli package and config some files

```
npm install netlify-cli -global
```

add [netlify.toml file](https://github.com/devrebeleza/week4-common-layout/blob/config-serverless/netlify.toml)
The netlify.toml is a configuration file that specifies how Netlify builds and deploys your site — including redirects, branch and context-specific settings, and more. [more info](https://docs.netlify.com/configure-builds/file-based-configuration/)

modify [package.json file](https://github.com/devrebeleza/week4-common-layout/blob/config-serverless/package.json)

we need to change a command in package.json to start our project.
this `"start": "astro dev"`, to this `"start": "netlify dev"`

### Using express

if we want to use express to handle our http request, we need express and serverles-http packages

```
npm install express --save
npm install serverless-http -global
```

## 🚀 Project Structure

Inside of our Astro project, you'll see the following folders and files (just show that we need):

```
/
├── functions/
│ 		├── hello.js  (default connection)
│ 		├── login.js  (express connection)
│ 		└── signup.js (express connection)
├── public/
├── src/
│ 		└── pages/
│ 		    ├── login.astro
│ 		    ├── index.astro
│ 		    └── signup.astro
├── netlify.toml (new)
└── package.json (modified)
```

### Extra feature

Currently if we want to acces our Netlify Functions, we need to acces `/.netlify/functions/<function_name>` and this is not user-friendly.
We can do a redirect to improve it!
This can be done with a file called `_redirects` in the publish directory of your site.
Or (my choice) change the `netlify.toml` file by adding:

> [[redirects]]
>       from = "/api/\*"
>       to = "/.netlify/functions/:splat"
>       status = 200

f you've used Netlify Functions before, you may know that one way to trigger them is to visit your site with the path /.netlify/functions/<your function name>. However, if you wanted to expose your functions as an API, this doesn't look super user-friendly. Instead, we can use redirects to improve it!

## 🧞 Commands

All commands are run from the root of the project, from a terminal:
| Command | Action |
| :--------------- | :----------------------------------------- |
| `npm run start ` | Start local dev server at `localhost:3000` |
|                  |             and Server on `localhost:8888` |

## 👀 Where I founded all this?

### Bibliography

1. first lecture -> [serverless-functions](https://www.netlify.com/blog/2021/12/11/serverless-functions-made-simple-just-add-files/)

2. oficial -> [oficial documentation](https://www.netlify.com/products/functions/?utm_campaign=featdaily21&utm_source=netlify&utm_medium=blog&utm_content=simple-serverless)

3. step by step -> [initial config](https://explorers.netlify.com/learn/up-and-running-with-serverless-functions/introduction-with-serverless-functions)

4. Deploy an express js app to aws lambda [config express](https://bitbucket.org/blog/deploy-an-express-js-app-to-aws-lambda-using-the-serverless-framework)

5. docs -> [to extract netlify.toml and structure](https://www.netlify.com/blog/2021/07/23/build-a-modern-shopping-site-with-astro-and-serverless-functions/)

6. Api route friendly -> [Setting up redirects on Netlify](https://www.netlify.com/blog/2021/12/13/setting-up-redirects-on-netlify/?utm_campaign=featdaily21&utm_source=netlify&utm_medium=blog&utm_content=feature-list)
