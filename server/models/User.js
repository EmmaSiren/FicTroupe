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
    followings: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    draft_characters: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Character',
      }
    ],
    original_characters: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Character',
      }
    ],
    saved_characters: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Character',
      }
    ],
    purchased_characters:[
      {
        type: Schema.Types.ObjectId,
        ref: 'Character',
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
userSchema.virtual('followingCount').get(function () {
  return this.followings.length;
});

userSchema.virtual('followerCount').get(function () {
  return this.followers.length;
});

userSchema.virtual('draftCount').get(function () {
  return this.draft_characters.length;
});

userSchema.virtual('originalCount').get(function () {
  return this.original_characters.length;
});

userSchema.virtual('savedCount').get(function () {
  return this.saved_characters.length;
});

userSchema.virtual('purchasedCount').get(function () {
  return this.purchased_characters.length;
});

// Check if the password is correct
// Need auth.js
// userSchema.methods.isCorrectPassword = async function (password) {
//   return bcrypt.compare(password, this.password);
// };

const User = model('User', userSchema);

module.exports = User;
