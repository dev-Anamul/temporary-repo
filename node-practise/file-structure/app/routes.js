const router = require("express").Router();

router.get("/health", (_req, res) => {
  res.status(200).send("OK");
});

module.exports = router;
