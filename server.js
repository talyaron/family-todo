const express = require ('express');
const app = express();

app.use(express.static('public'));

//hi

const port = process.env.PORT || 4000;
app.listen(port,()=>{console.log('servewr listen on port ',port)})