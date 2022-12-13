const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    myCharacters: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Character'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Virtuals to get followerCount, followingCount, and individual characterCounts
userSchema.virtual('characterCount').get(function () {
  return this.myCharacters.length;
});

// Check if the password is correct
// Need auth.js
// userSchema.methods.isCorrectPassword = async function (password) {
//   return bcrypt.compare(password, this.password);
// };

const User = model('User', userSchema);

module.exports = User;
