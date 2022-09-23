const express = require('express');

const app = express();


app.get('/',(req,res)=>{

console.log('my portfolio here');
});

app.listen(Process.env || 3000);

