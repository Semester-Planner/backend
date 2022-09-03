exports.test = (req, res, next) => {
  // const {
  //   body: { username, password, email },
  //   params: { id },
  // } = req;
  // const { username } = req.body;

  // const username = req.body.username;

  // if (username !== 'massi') {
  //   return res.status(403).send('You are not allowed to access this route');
  // }
  return next();
};
