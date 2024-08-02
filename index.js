console.log(" hello its start of backend");

require('dotenv').config



const express = require('express') // require module syntax
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/twitter', (req,res)=>{
    res.send('hello from twitter') 
})                                    // need to restart the server 
                                      //  Hot reload 
app.get('/twitter/callback', (req,res)=>{
   res.send('<h1> Hello man</h1>')
})

/*
 The error "Cannot use import statement outside a module" occurs because the import statement is used only in ECMAScript modules (ESM). By default, Node.js uses CommonJS modules, which use the require function for imports.

To fix this issue, you have two options:

### 1. Convert to CommonJS Syntax
You can replace the import statement with require: */