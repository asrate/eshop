const express = require("express");
const router = express.Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const config = require("../config/keys");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
router.get("/", (req, res) => res.send("Users router"));

router.post(
  "/",
  [
    check("name", "name is required").not().isEmpty(),
    check("email", "enter valid email").isEmail(),
    check(
      "password",
      "please password should have atleast as 5 character"
    ).isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    console.log(req.body);
    // console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { name, email, password } = req.body;
      let user = await User.findOne({ email: email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "user already exists" }] });
      }
      user = new User({
        name,
        email,
        password,
      });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      user.save();
      console.log(user);

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
          // console.log(token);
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
