const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { body } = require("express-validator");

// Create express instnace
const app = express();

// use middleware
app.use([cors(), morgan("dev"), express.json()]);

//validators
const bodyValidator = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters long")
    .matches(/^[a-zA-Z]+$/)
    .withMessage("Name must be alphabets only"),
  body("email")
    .normalizeEmail({
      gmail_remove_dots: false,
      gmail_remove_subaddress: false,
      gmail_convert_googlemaildotcom: false,
      outlookdotcom_remove_subaddress: false,
      yahoo_remove_subaddress: false,
      icloud_remove_subaddress: false,

    })
    .isEmail()
    .withMessage("Must be a valid email address"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body("passwordConfirmation").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Password confirmation does not match password");
    }
    return true;
  }),
];

// Require API routes
app.get("/user", (req, res) => {
  res.send("Hello World!");
});

app.post("/user", bodyValidator, (req, res) => {
  const errors = validationResult(req);
  console.log(errors);
  res.send("Hello World!");
});

const port = 3000;
