const { Schema } = require('mongoose');

const baseModelSchema = new Schema({
    createdIn: {
        type: Schema.Types.ObjectId,
        default: null,
    },
    dateCreated: {
        type: Date,
        default: null,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'UserAccount',
    },
    modifiedIn: {
        type: Schema.Types.ObjectId,
        default: null,
    },
    dateModified: {
        type: Date,
        default: null,
    },
    modifiedBy: {
        type: Schema.Types.ObjectId,
        ref: 'UserAccount',
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    isSynced: {
        type: Boolean,
        default: false,
    },
});

function applyBaseSchema(schema) {
    schema.add(baseModelSchema);
}

module.exports = applyBaseSchema;
