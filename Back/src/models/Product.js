const mongoose = require('mongoose')

const ProductSchema = new mongoose.schema({
    nome: {
        type: string,
        required: true, 
    },
    desc: {},
    valor: {},
    quantidade: {},
})