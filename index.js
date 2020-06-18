const express = require('express');
const morgan = require('morgan');
const app = express();


// Set it before all routes to check info sent using Postman (POST Method)
app.use(express.json());
app.use(morgan('dev'));


app.get('/user', (req, res)=>{
    res.json({
        name: "Andrés",
        lastName: "Agudelo",
    });
});

app.post('/user/:id', (req, res)=>{
    console.log(req.body);
    console.log(req.params);
    res.send('POST REQUEST RECEIVED'); 
});

app.put('/user/:id', (req, res)=>{
    console.log(req.body);
    res.send("User "+req.params.id+" was updated");
});

app.delete('/user/:id', (req, res)=>{
    res.send("User "+req.params.id+" was deleted");
})

// IMPORTANT, to serve static files to front-end:
// Create 'public' dir in project root
app.use(express.static('public'));


app.listen(3000, ()=>{
    console.log("Server running on port 3000");
});