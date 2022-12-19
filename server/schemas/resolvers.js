const { AuthenticationError } = require('apollo-server-express');
const { User, Character } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // user: async (parent, { username }) => {
    //   return await User.findOne({ username }).populate('myCharacters');
    // },
    user: async (parent,args, context) => {
        
      // return await User.findOne({ username: context.user._id })
     
      if (context.user) {
        const me = await User.findOne({ _id: context.user._id })
        console.log(me);
        return me;
      }},
    users: async () => {
      return await User.find({});
    },
    characters: async () => {
      return await Character.find();
    },
    character: async (parent, { characterId }) => {
      return await Character.findOne({ _id: characterId});
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    // Manage user information
    createUser: async (parent, args) => {
      const user = await User.create( args );
      const token = signToken(user);
      return { token, user };
    },
    // Manage user login
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new AuthenticationError('Wrong username or password!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Wrong username or password!');
      }

      const token = signToken(user);
      return { token, user };
    },

    // Manage Character information
    // What if the author put some other info when creating a character?
    createCharacter: async (parent, { name, description, universe, status }, context) => {
      if (context.user) {
        
        const character = await Character.create(
          { 
            name: name,
            author: context.user.username,
            description: description,
            universe: universe,
            status: status,
          },);
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { myCharacters: character._id} }
        )
        return character;
      } else {
        console.log("Please log in to create a new character!");
      }
    },

    // 
    updateCharacter: async( parent, { characterId, Inputdescription }, context) => {
      if (context.user) {
        const character = await Character.findById(characterId);
        if (context.user.username == character.author) {
          return await Character.findByIdAndUpdate(
            { _id: characterId },
            { $set: { description: Inputdescription } },
            {new: true}
          )
        }
      } else {
        console.log("Log in to update your character!");
      }
    },
    
    // Delete an original character
    deleteCharacter: async (parent, { characterId }, context) => {
      if(context.user) {
        const character = await Character.findByIdAndDelete(characterId)};
        if (context.user.username == character.author) {
          return  await User.findByIdAndUpdate(
              { username: context.user._id },
              { $pull: { myCharacters: character._id } },
              { new: true },
          )
        }
      }
  },
}

module.exports = resolvers;
