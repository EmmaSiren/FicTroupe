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
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ]
  }, 
  {
    toJSON: {
      virtuals: true,
    },
    id: false
  }
);

// Get the comment counts
characterSchema.virtual('commentCount').get(function() {
  return this.comments.length;
});

const Character = model('Character', characterSchema);

module.exports = Character;
