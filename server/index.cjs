const express = require("express");
const cors = require("cors");
const videoDetails = require("./routes/videoDetails.cjs");

const app = express();

app.listen(2006, () => {
  console.log("running on port 2006");
});

app.use(
  cors({
    origin: "*",
  })
);

app.use("/download", videoDetails);
