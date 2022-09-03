exports.unresolvedPathHandler = (req, res, next) => {
  return res.status(404).send("Unresolved path");
};
