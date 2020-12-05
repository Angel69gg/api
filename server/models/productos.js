const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let productosSchema= new Schema ({
nombre: {
  type: String,
  required: [true, 'Nombre necesario']
},
categoria: {
 type: String,
 required:[true,'Categoria necesaria']

},
precio :{
type: String,
required: [true,"Precio necesario"]

},
disponibilidad :{
type: String,
required: [false,'se necesita disponibilidad']
}

});

let encargadosSchema= new Schema ({
nombreEncargado: {
    type: String,   
required: [true,'se necesita nombre de encargado']
},
apellidos: {
type: String,

required: [true,'se necesita apellido ']

},
email: {
type: String,

required: [true,'se necesita correo']

},
password: {
type:String,

required: [true,'La contrasena es necesaria ']

}

    
})
module.exports= mongoose.model('Productos',productosSchema)
module.exports= mongoose.model('Encargados',encargadosSchema)