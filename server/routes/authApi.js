const express = require("express");
const router = express.Router();
const auth = require("../middleware/authorization");
const User = require("../model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../config/keys");
const { check, validationResult } = require("express-validator");
router.get("/", auth, async (req, res) => {
  try {
    console.log(req.user);
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.error(error.message);
  }
});

router.post(
  "/",
  [
    check("email", "enter valid email").isEmail(),
    check("password", "please enter correct password").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    // console.log(req.body);
    // console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { email, password } = req.body;
      let user = await User.findOne({ email: email });
      console.log(user, user.email);
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid email or password" }] });
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Password is required" }] });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.jwtSecret,
        { expiresIn: 3600 * 24 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
          //   console.log(token);
        }
      );

      // res.send("user created");
    } catch (error) {
      console.error(error);
      res.status(500).send("server error");
    }
  }
);

module.exports = router;
