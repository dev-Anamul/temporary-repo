const { model, Schema } = require('mongoose');

const NotificationSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        body: {
            type: String,
            required: true,
            trim: true,
        },
        imageUrl: {
            type: String,
        },
        notificationType: {
            type: String,
            required: true,
            enum: ['single', 'all', 'channel'],
        },
        channel: {
            type: Schema.Types.ObjectId,
            ref: 'NotificationChannel',
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        status: {
            type: String,
            required: true,
            enum: ['success', 'failed', 'warn'],
        },
        read: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
        virtuals: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

const Notification = model('Notification', NotificationSchema);

module.exports = Notification;
