const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  accountType: {
    type: String,
    default: "buyer",
  },
  uploads: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  purchased: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  favourites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});

module.exports = mongoose.model("User", userSchema);

