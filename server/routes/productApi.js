const express = require("express");
const auth = require("../middleware/authorization");
const { check, validationResult } = require("express-validator");
const Product = require("../model/Product");
const router = express.Router();
router.post(
  "/",
  [
    auth,
    [
      check("name", "name is required").not().isEmpty(),
      check("description", "descripption is required").not().isEmpty(),
      check("catagory", "catagory is required").not().isEmpty(),
      check("price", "price is required").not().isEmpty(),
      check("quantity", "quantity is requires").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      console.log(req.body);
      console.log(res.user);
      const { name, description, catagory, price, quantity } = req.body;
      const newProduct = new Product({
        userId: req.user.id,
        name,
        description,
        quantity,
        price,
        catagory,
      });
      const product = await newProduct.save();
      res.json(product);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("server error");
    }
  }
);
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("product not found");
  }
});
//  res.send("products router"));

module.exports = router;
