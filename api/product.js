const express = require('express');
const router = express.Router();

/*
  GET product list

  @return product list | empty
*/

router.get("/", async (req, res) => {
  try {
    res.json({
      status: 200,
      message: "GET data has successfully run",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;