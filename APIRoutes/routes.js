const router = require("express").Router();
const controller = require("../controllers/controller.js");

router.route("/saved")
  .get(controller.findAll)
  .post(controller.create);

router.route("/saved/:id")
  .delete(controller.remove);

module.exports = router;
