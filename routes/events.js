/*
  Events Routes / Events
  host + /api/events
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { fieldsValidator } = require("../middlewares/fields-validator");
const { isDate } = require("../helpers/isDate");

const { validateJWT } = require("../middlewares/validate-jwt");
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/events");

const router = Router();

// All Routes should be token validated JWT

router.use(validateJWT);

// Get Events
router.get("/", getEvents);

// Create event
router.post(
  "/",
  [
    check("title", "Title is required").not().isEmpty(),
    check("start", "Start date is required").custom(isDate),
    check("end", "End date is required").custom(isDate),
    fieldsValidator,
  ],
  createEvent
);

// Update event
router.put("/:id", updateEvent);

// Update event
router.delete("/:id", deleteEvent);

module.exports = router;
