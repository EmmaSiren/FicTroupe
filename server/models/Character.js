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
    },
    description: {
      type: String,
    },
    universe: {
      type: String,
    },
    status: {
      type: String,
      required: false,
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
