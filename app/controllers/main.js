const db = require("../db/models");

const { User } = db;

exports.testController = (req, res, next) => {
  // if (req.body.username !== "massi") {
  //   return next("hi");
  // }
  // return res.send("Hello world!!!!!!!");

  const {
    body: { email },
  } = req;

  // db.User.findOne({
  //   where: { username },
  // })
  //   .then((user) => {
  //     if (!user) throw new Error("User not found");
  //     console.log(user);
  //     return res.status(200).send(user.username);
  //   })
  //   .catch((err) => next(err));

  User.findByEmail(email)
    .then((user) => {
      console.log(user);
      return res.status(200).send(user.email);
    })
    .catch((err) => next(err));
};
