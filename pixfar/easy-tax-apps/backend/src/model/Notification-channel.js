const { model, Schema } = require('mongoose');

const NotificationChannelSchema = new Schema(
    {
        channelName: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        logo: {
            type: String,
        },
        members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    },
    {
        timestamps: true,
        versionKey: false,
        virtuals: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

const NotificationChannel = model('NotificationChannel', NotificationChannelSchema);

module.exports = NotificationChannel;
