const { model, Schema } = require('mongoose');
const applyBaseSchema = require('./baseSchema');

// Define the District schema
const districtSchema = new Schema({
    districtName: {
        type: String,
        required: true,
        maxlength: 90,
    },
    districtCode: {
        type: String,
        required: true,
        maxlength: 4,
    },
    provinceID: {
        type: Schema.Types.ObjectId,
        ref: 'Province',
        required: true,
    },
    facilities: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Facility',
        },
    ],
    towns: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Town',
        },
    ],
    deathRecords: [
        {
            type: Schema.Types.ObjectId,
            ref: 'DeathRecord',
        },
    ],
});

// add base schema
applyBaseSchema(districtSchema);

// create model
const District = model('District', districtSchema);

// export model
module.exports = District;
