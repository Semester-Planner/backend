exports.testController = (req, res, next) => {
  if (req.body.username !== "massi") {
    return next("hi");
  }
  return res.send("Hello world!!!!!!!");
};
