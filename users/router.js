const router = require("express").Router();

const Users = require("./model.js");

router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send("asdasdasdasdasdasdads"));
});

module.exports = router;
