const express = require('express');
const cors =require('cors');
const {getAll,deleteOne,update,add} = require("./db mongoose/connection.js")
const {db} = require('./db mongoose/model');
const port = 5000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/flousi/get",(req,res) => {
    getAll()
    .then((result)=>{
        res.status(200).send(result)})
.catch((err)=>res.status(500).send(err))
})

app.delete("/api/flousi/delete/:id",(req,res) => {
    const id = req.params.id
    deleteOne(id).then((rslt) => {
        res.json(rslt)
    })
    .catch((err)=> {
     res.json(err)
    })
})


app.put("/api/flousi/put/:id",(req,res)=>{
    update(req.params.id,req.body).then ((rslt) =>{
        res.json(rslt)
    })
    .catch((err)=> {
        res.json(err)
       })
})

app.post("/api/flousi",(req,res)=>{
    console.log(req.body);
    add(req.body)
    .then ((rslt) =>{
        res.status(201).send(rslt)
    })
    .catch((err)=> {
        console.log(err);
        res.send(err)
       })
})

app.listen(port, ()=>{
    console.log(`listening on ${port}`);
    })


