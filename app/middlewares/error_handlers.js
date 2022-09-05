exports.unresolvedPathHandler = (req, res, next) => {
  return res.status(404).send("Unresolved path");
};

exports.errorHandler = (err, req, res, next) => {
  return res.status(500).send("Something broke!");
};
