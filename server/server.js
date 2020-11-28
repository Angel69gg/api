require('./config/config')
const express = require('express')
const app = express()
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('<h1>Bienvenido a mi servidor rest!</h1>')
})
app.get('/usuario', function (req, res) {
    res.json({
        ok: 200,
          mensaje: 'Usuario consultado con exito'
    })
})
  
app.post('/usuario/',function(req,res){
    let nombre= req.body.nombre;
    let body= req.body;

    if(nombre==undefined){
      res.status(404).json({
        ok: 400,
        mensaje: 'favor de enviar el valor del nombre'
      })
    }else{

    res.json({
        ok: 200,
          mensaje: 'Usuario Insertado con exito',
          body: body
    })
  }
    
  
  app.delete('/usuario/:id',function(req,res){
      let id= req.params.id
      res.json({
        ok:200,
        mensaje: 'usuario eliminado con exito',
        id: id
      })
  })

  })
 
 
 
  app.put('/usuario/:id/:nombre',function(req,res){
    let id = req.params.id;
    let nombre = req.params.nombre;
    res.json ({
        ok: 200,
         mensaje: 'Usuario actualizado con exito',
        id: id,
        nombre: nombre
    })

  })
app.listen(process.env.PORT,()=>{
console.log('el servidor esta corriendo en el puerto 3000')


})