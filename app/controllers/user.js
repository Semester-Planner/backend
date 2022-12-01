const db = require("../db/models");

const { User } = db;

exports.createUser = async (data) => {
  const user = await User.findOrCreate({
    where: { email: data._json.email },
    defaults: {
      name: data._json.given_name,
      surname: data._json.family_name,
      picture: data._json.picture,
    },
    raw: true,
  });
  return user;
};
