const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    address: String,
    bio: String,
    image: String,
  },
  {
    strict: false,
    timestamps: true,
    methods: {
      getFullName: function (cb) {
        return mongoose.model("User").find({ email: this.email }, cb);
      },
    },
    statics: {
      findByEmail: function (email) {
        return this.find({ email: email });
      },
    },
  }
);

const User = model("User", userSchema);
module.exports = User;
