// login
exports.successfulLogin = async (req, res, _next) => {
  const user = await req.user;
  if (user) {
    return res.status(200).json(user);
  }
  return res.status(403).send();
};

// logout
exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    return res.status(200).send("Successfully logged out");
  });
};

// check session
exports.checkAuth = (req, res, next) => {
  res.status(res.isAuthenticated() ? 200 : 401).send();
};
