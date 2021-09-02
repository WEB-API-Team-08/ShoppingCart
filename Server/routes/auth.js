const { Router } = require("express");
const User = require("../models/user");
const { userValidation } = require("../validations/userValidation");
const router = Router();


// POST
router.post("/", async (req, res) => {

  //Validate the data before we create a link
  const { error } = userValidation(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  const { name, sub } = req.body;

  try {
    let user = await User.find({ sub: sub });
    if (!user.length) {
      user = new User({
        name: name,
        sub: sub,
      });

      user = await user.save();
      return res.send(user);
    }
    return res.status(200).send("Login successful");

  } catch (e) {
    return res.status(500).send("Database/Server Error");
  }

});

module.exports = router;