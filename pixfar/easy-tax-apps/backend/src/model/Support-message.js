const { Schema, model } = require('mongoose');

const supportMessageSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'Support message must belongs to a user'],
        },
        email: {
            type: String,
            required: [true, 'Support message must have an email'],
        },
        subject: {
            type: String,
            required: [true, 'Support message must have a subject'],
        },

        message: {
            type: String,
            required: [true, 'Support message must have a message'],
        },
        status: {
            type: String,
            enum: ['pending', 'resolved'],
            default: 'pending',
        },
        type: {
            type: String,
            enum: ['send', 'receive'],
        },
        isFeatured: {
            type: Boolean,
            default: false,
        },
        isRead: {
            type: Boolean,
            default: false,
        },
        replyId: {
            type: Schema.Types.ObjectId,
            ref: 'SupportMessage',
            required: false,
        },
    },
    {
        versionKey: false,
        timestamps: true,
        virtuals: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

supportMessageSchema.virtual('replies', {
    ref: 'SupportMessage',
    localField: '_id',
    foreignField: 'replyId',
});

const SupportMessage = model('SupportMessage', supportMessageSchema);

module.exports = SupportMessage;
