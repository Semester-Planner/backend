exports.unresolvedPathHandler = (req, res, next) => {
  return res.status(404).json("Unresolved path");
};

exports.errorHandler = (err, req, res, next) => {
  return res.status(500).json("Something broke!");
};
