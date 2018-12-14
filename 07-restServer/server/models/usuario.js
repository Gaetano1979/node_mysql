const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let roleValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol valido'
};


let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre necesario']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El correo es necesario']
    },
    pasword: {
        type: String,
        required: [true, 'La pasword es necesaria']
    },
    img: {
        type: String,
        required: [false, 'La img no es obligatoria']
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: roleValidos
    },
    estado: {
        type: Boolean,
        default: true,
    },
    google: {
        type: Boolean,
        default: false
    }
});

//creo un metodo para que no devuelva la pas
usuarioSchema.methods.toJSON = function() {
    let user = this;
    let userObjet = user.toObject();
    delete userObjet.pasword;
    //en este modo el retorno del json será sin pasword
    return userObjet;
};

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe ser unico' });

module.exports = mongoose.model('Usuario', usuarioSchema);