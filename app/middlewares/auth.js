module.exports = checkAuth = (req, res, next) => {
  if (!req.user) {
    return res.status(403).json("Not authenticated");
  }
  return next();
};
