const bcrypt = require("bcryptjs");
const router = require("express").Router();

const authRouter = require("../auth/router_auth");
const usersRouter = require("../users/router");
const restricted = require("../auth/restricted");

router.use("/auth", authRouter);
router.use("/users", restricted,  usersRouter);

router.get("/hash", (req, res) => {

  const authentication = req.headers.authentication;

  const hash = bcrypt.hashSync(authentication, 12);

  res.json({ originalValue: authentication, hashedValue: hash });

});

router.get("/", (req, res) => {
  res.json({ api: "sup ._." });
});

module.exports = router;
