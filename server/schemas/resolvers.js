const { User, Comment, Character } = require('../models');

const resolvers = {
  Query: {
    user: async (parent, {_id}) => {
      const params = _id ? { _id } : {};
      return await User.find(params);
    },
    characters: async () => {
      return await Character.find({});
    },
    characters: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return await Character.find(params);
    },
  },

  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },

    createMatchup: async (parent, args) => {
      const matchup = await Matchup.create(args);
      return matchup;
    },
    createVote: async (parent, { _id, techNum }) => {
      const vote = await Matchup.findOneAndUpdate(
        { _id },
        { $inc: { [`tech${techNum}_votes`]: 1 } },
        { new: true }
      );
      return vote;
    },
  },
};

module.exports = resolvers;
