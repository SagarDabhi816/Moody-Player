const express = require("express");
const multer = require("multer");
const uploadFile = require("../service/storage.service");
const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });


router.post("/songs", upload.single("audio"), async (req, res) => {
    const fileData = await uploadFile(req.file);
  
  res.status(201).json({
    message: "Song Created",
    song: req.body,
  });

  console.log(req.body);
  console.log(req.file);
  console.log(fileData)
});

module.exports = router;
