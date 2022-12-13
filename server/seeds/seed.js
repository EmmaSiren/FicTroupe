const db = require('../config/connection');
const { Character, User } = require('../models');
const userData = require('./userData.json');
const characterData = require('./characterData.json');

db.once('open', async () => {
  await Character.deleteMany({});
  await User.deleteMany({});

  await User.create(userData);

  for (let i = 0; i < characterData.length; i++) {
    const { _id, author, name, background, universe } = await Character.create(characterData[i]);
    const user = await User.findOneAndUpdate(
      { username: author },
      {
        $addToSet: {
          myCharacters: _id,
        },
      }
    );
    console.log(user);
  }; 

  console.log('Characters and Users seeded!');
  process.exit(0);
});
