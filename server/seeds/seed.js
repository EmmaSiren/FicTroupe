const db = require('../config/connection');
const { Character, User } = require('../models');

const userData = require('./userData.json');
const characterData = require('./characterData.json');

db.once('open', async () => {
  await Character.deleteMany({});
  await User.deleteMany({});

  const characters = await Character.insertMany(characterData);
  const users = await User.insertMany(userData);

  console.log('Characters and Users seeded!');
  process.exit(0);
});
