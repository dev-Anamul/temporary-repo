const { model, Schema } = require('mongoose');
const applyBaseSchema = require('./baseSchema');

// Define the Town schema
const townSchema = new Schema({
    townName: {
        type: String,
        required: true,
        maxlength: 90,
    },
    districtID: {
        type: Schema.Types.ObjectId,
        ref: 'District',
        required: true,
    },
    clients: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Client',
        },
    ],
});

// add base schema
applyBaseSchema(townSchema);

// create model
const Town = model('Town', townSchema);

// export model
module.exports = Town;
