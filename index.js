const express = require('express');
const app = express();

// MIDDLEWARE
function logger(req, res, next){
    console.log('Route received:'+req.protocol+'://'+req.get('host')+req.originalUrl);
    next();
}


// Set it before all routes to check info sent using Postman (POST Method)
app.use(express.json());
app.use(logger);


app.get('/user', (req, res)=>{
    res.json({
        name: "Andrés",
        lastName: "Agudelo",
    });
});

app.post('/user/:id', (req, res)=>{
    console.log(req.body);
    console.log(req.params);
});

app.put('/user/:id', (req, res)=>{
    console.log(req.body);
    res.send("User "+req.params.id+" was updated");
});

app.delete('/user/:id', (req, res)=>{
    res.send("User "+req.params.id+" was deleted");
})

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
});