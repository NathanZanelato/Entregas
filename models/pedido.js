const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _model = new Schema({
    emissao: {
        type: Date,
        default: Date.now
    },
    cliente: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'clientes'
    },
    caminhoneiro: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'caminhoneiros'
    },
	partida: String,
	destino: String

});



mongoose.model('pedidos', _model);