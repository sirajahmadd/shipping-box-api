const http = require('http')

http.createServer((req,res) =>{
    res.end('hello world')
}).listen(9000)



const express = require('express')
const app = express()
app.use(express.json())

const items =[]
// get method

app.get('/items',(req,res) => {
    res.send(items)
    
})

//post method
app.post('/items',(req,res) => {
    try{
        const item = req.body;
        items.push(item);
        res.send(items)
    }catch(error){
        res.send(error)
    }
})

//put method 
app.put('/items/:id',(req,res) =>{
    try{
        const id = req.params.id;
        const index= items.findIndex(item =>
            item.id==id);
            items[index]=req.body;
            res.send(items)
    }catch(error){
        res.send(error)
    }
})

//delete method

app.delete('/items/:id',(req,res) => {
    try{
        const index = items.findIndex((item) => 
        item.id==req.params.id);
        items.splice(index,1)
        res.send(items)
    }catch(error){
        res.send(error)
    }
})

//get perticular item using its id

app.get('/items/:id',(req,res) =>{
    try{
        const item = items.find(item =>
            item.id==req.params.id);
            res.send(item)
    }catch(error){
        res.send(error)
    }
})



app.listen(8000, () => {
    console.log('server is running on port 8000')
})