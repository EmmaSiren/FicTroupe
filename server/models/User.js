const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

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

// Hash the password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Check if the password is correct
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
