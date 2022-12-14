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

    // Manage Character information
    // What if the author put some other info when creating a character?
    createCharacter: async (parent, { name, Inputbackground, Inputuniverse, Inputstatus }, context) => {
      if (context.user) {
        const character = await Character.create(
          { 
            name,
            author: context.user.username,
            background: Inputbackground,
            universe: Inputuniverse,
            status: Inputstatus,
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
    updateCharacter: async( parent, { characterId, Inputbackground }) => {
      /////////////////////Work here //////////////////
      return await Character.findByIdAndUpdate(
        { _id: characterId },
        { $set: { background: Inputbackground } },
        {new: true}
      )
      // if (context.user && user._id === id ) {
      //   return await Character.findOneAndUpdate( 
      //     { _id: id },
      //     { background },
      //     { new: true }
      //   )
      // }
    },
    
    // Delete an original character
    deleteCharacter: async (parent, { characterId }, context) => {
      if(context.user) {
        const character = await Character.findByIdAndDelete(characterId)};

        await User.findByIdAndUpdate(
        )
      }
  //     if (context.user) {
  //       const character = await Character.findOneAndDelete({characterId,
  //       });

  //       await User.findOneAndUpdate(
  //         { _id: context.user._id },
  //         { $pull: { myCharacters: character._id } }
  //       );

  //       return character;
  //     }
  //   },
  // }
  },
}

module.exports = resolvers;
