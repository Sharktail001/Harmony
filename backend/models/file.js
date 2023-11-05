const mongoose = require('mongoose');

const data = new mongoose.Schema(
    {
        email: {type: String, required: true},
        data: {type: Object, required: true},
    },
    {collection: 'data'}
)

const model = mongoose.model('Data', data);

module.exports = model;