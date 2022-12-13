const { User, Character } = require('../models');

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      return await User.findOne({ username }).populate('myCharacters');
    },
    users: async () => {
      return await User.find({});
    },
    characters: async () => {
      return await Character.find({});
    },
    character: async (parent, { characterId }) => {
      return await Character.findOne({ _id: characterId});
    },
    // me: async (parent, args, context) => {
    //   if (context.user) {
    //     return User.findOne({ _id: context.user._id });
    //   }
    //   // throw new AuthenticationError('You need to be logged in!');
    // },
  },

  Mutation: {
    // Manage user information
    createUser: async (parent, { username, email, password}) => {
      const user = await User.create({ username, email, password});
      // assign token here?
      return user;
    },

    // Manage Character information
    // What if the author put some other info when creating a character?
    createCharacter: async (parent, { name }, context) => {
      const character = await Character.create(
        { 
          name,
          author: context.user.username,
        });
      await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { myCharacters: character._id} }
      )
      return character;
    },

    // Update some parameters for a character? Not all?
    updateCharacter: async( parent, { id, background }) => {
      return await Character.findOneAndUpdate( 
        { _id: id },
        { background },
        { new: true }
      )
    },
    // Delete an original character
    deleteCharacter: async (parent, { characterId }, context) => {
      if (context.user) {
        const character = await Character.findOneAndDelete({
          _id:characterId,
          author: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { myCharacters: character._id } }
        );

        return character;
      }
    },

    //login? from MERN/25-Resolver-Content/resolvers.js  Need to add utils
    // login: async (parent, { username, password }) => {
    //   const user = await User.findOne({ username });
    //   if (!user) {
    //     throw new AuthenticationError('No profile with this email found!');
    //   }

    //   const correctPw = await profile.isCorrectPassword(password);

    //   if (!correctPw) {
    //     throw new AuthenticationError('Incorrect password!');
    //   }

    //   const token = signToken(user);
    //   return { token, user };
    // },
  }
};

module.exports = resolvers;
