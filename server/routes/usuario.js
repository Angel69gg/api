const express = require('express')
const Encargado = require('../models/productos')
const app = express()
const Producto= require('../models/productos')

  app.get('/productos', function (req, res) {
      Producto.find({}).exec((err,producto)=>{
          if(err){
              return res.status(400).json({
                  ok: false,
                  msg:'ocurrio un error al consultar',
                  err
              })
          }
          res.json ({
            ok: true,
            msg: 'lista obtenida con exito',
            conteo: Producto.length,
            producto
          })
      })
  })
    
  app.post('/Nuevoproducto',function(req,res){
      let body= req.body;
  let prdct = new Producto({
      nombre: body.nombre,
      categoria: body.categoria,
      precio: body.precio,
      disponibilidad: body.disponibilidad

    });
    prdct.save((err,prdctDB)=>{
if (err){
    return res.status(400).json({
        ok: false,
        msg: 'ocurrio un error',
        err
   })
}

  
      res.json({
          ok: true,
            mensaje: 'Producto Insertado con exito',
            prdctDB
      })
    })
})
      
    
    app.delete('/producto/:id',function(req,res){
        let id= req.params.id
        res.json({
          ok:200,
          mensaje: 'usuario eliminado con exito',
          id: id
        })
    })
   app.put('/producto/:id/:nombre',function(req,res){
      let id = req.params.id;
      let nombre = req.params.nombre;
      res.json ({
          ok: 200,
           mensaje: 'Usuario actualizado con exito',
          id: id,
          nombre: nombre
      })
  
    })
    app.post('/NuevoEncargado',function(req,res){
        let body= req.body;
    let encargado = new Encargado({
        nombre: body.nombreEncargadp,
        categoria: body.apellidos,
        precio: body.email,
        disponibilidad: body.password
  
      });
      encargado.save((err,encargadoDB)=>{
  if (err){
      return res.status(400).json({
          ok: false,
          msg: 'ocurrio un error',
          err
     })
  }
  
    
        res.json({
            ok: true,
              mensaje: 'Producto Insertado con exito',
              encargadoDB
        })
      })
  })