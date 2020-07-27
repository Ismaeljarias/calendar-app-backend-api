/*
  User Routes / Auth
  host + /api/auth
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { fieldsValidator } = require("../middlewares/fields-validator");
const { createUser, renewToken, loginUser } = require("../controllers/auth");
const { validateJWT } = require("../middlewares/validate-jwt");

const router = Router();
router.post(
  "/new",
  [
    // middlewares
    check("name", "Name is required").not().isEmpty(),
    check("email", "Email is required").isEmail(),
    check("password", "Password should be at least 6 characters").isLength({
      min: 6,
    }),
    fieldsValidator,
  ],
  createUser
);

router.post(
  "/",
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password should be at least 6 characters").isLength({
      min: 6,
    }),
    fieldsValidator,
  ],
  loginUser
);

router.get("/renew", validateJWT, renewToken);

module.exports = router;
