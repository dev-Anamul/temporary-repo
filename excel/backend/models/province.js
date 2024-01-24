const { model, Schema } = require('mongoose');
const applyBaseSchema = require('./baseSchema');

// Define the Province schema
const provinceSchema = new Schema({
    provinceName: {
        type: String,
        required: true,
        maxlength: 90,
    },
    districts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'District',
        },
    ],
});

// add base schema
applyBaseSchema(provinceSchema);

// create model
const Province = model('Province', provinceSchema);

// export model
module.exports = Province;
