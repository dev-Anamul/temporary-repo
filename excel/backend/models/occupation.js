const { model, Schema } = require('mongoose');
const applyBaseSchema = require('./baseSchema');

// Define the Occupation schema
const occupationSchema = new Schema({
    occupations: {
        type: String,
        required: true,
        maxlength: 90,
    },
});

// add base schema
applyBaseSchema(occupationSchema);

// create model
const Occupation = model('Occupation', occupationSchema);

// export model
module.exports = Occupation;
