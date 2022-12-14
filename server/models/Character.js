const { Schema, model } = require('mongoose');

const characterSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    author: {
      type: String,
      required: true,
    },
    background: {
      type: String,
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    //   // get: (timestamp) => dateFormat(timestamp),
    // },
    universe: {
      type: String,
    },
    // A character can have 00 kinds of status: draft, private, public, available, and sold
    // Characters that are available for sale and sold only shows limited information
    status: {
      type: String,
      required: true,
    },
  }, 
  {
    toJSON: {
      virtuals: true,
    },
    id: false
  }
);

const Character = model('Character', characterSchema);

module.exports = Character;
