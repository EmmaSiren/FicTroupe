const { User, Comment, Character } = require('../models');

const resolvers = {
  Query: {
    user: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return await User.find(params);
    },
    characters: async () => {
      return await Character.find({});
    },
    character: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return await Character.find(params).populate('comments').populate({ path: 'comments', populate:'commentBody'});
    },
    comment: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return await Comment.find(params);
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      // throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    createUser: async (parent, { username, email, password}) => {
      const user = await User.create({ username, email, password});
      return user;
    },
    updateUser: async (parent, { id, password}) => {
      return await User.findOneAndUpdate({ _id: id}, { password }, { new: true});
    },
    // What if the author put some other info when creating a character?
    createCharacter: async (parent, { name, universe}) => {
      const character = await Character.create({ name, universe});
      return character;
    },
    // Update some parameters for a character? Not all?
    updateCharacter: async( parent, args) => {
      return await Character.findOneAndUpdate()
    },
    // How to add the date? the name of the author?
    createComment: async (parent, { commentBody }) => {
      if (context.user) {
        const comment = await Comment.create({
          commentBody,
          author: context.user.username,
          character: context.character,
        });

        return comment;
      }
    },
    deleteComment: async (parent, { characterId, commentId }, context) => {
      if (context.character) {
        const comment = await Comment.findOneAndDelete({
          _id: commentId,
          author: context.user.username,
        });

        await Character.findOneAndUpdate(
          { _id: characterId },
          { $pull: { comments: { _id: comment._id} } }
        )
      }
    }

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
  },
};

module.exports = resolvers;
