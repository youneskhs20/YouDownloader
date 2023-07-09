const express = require("express");
const ytdl = require("ytdl-core");

const router = express.Router();

router.get("/", async (req, res) => {
  const url = decodeURIComponent(req.query.url);
  const data = await getFormatsAndQualities(url);
  res.json(data);
});

async function getFormatsAndQualities(url) {
  let data = {};

  try {
    const res = await ytdl.getInfo(url);

    const { videoDetails, formats } = res;
    const { title, lengthSeconds, thumbnails } = videoDetails;

    data.title = title;
    data.duration = lengthSeconds;
    data.img = thumbnails[thumbnails.length - 1].url;
    data.formats = formats.map((i) => {
      let { contentLength } = i;
      let mb = 1024
      let fileSize; 
      fileSize = (contentLength / mb / mb).toFixed(2);
      fileSize = fileSize > mb ? (fileSize / mb).toFixed(2) + ' GB' : fileSize + ' MB'

      return {
        ...i,
        fileSize
      }

      // const {
      //   qualityLabel,
      //   container,
      //   fps,
      //   contentLength,
      //   url,
      //   mimeType,
      //   hasAudio,
      //   hasVideo,
      // } = i;

      // const allKeysExist = [
      //   qualityLabel,
      //   container,
      //   fps,
      //   contentLength,
      //   url,
      //   mimeType,
      //   hasAudio,
      //   hasVideo,
      // ].every((key) => key !== undefined);

      // if(allKeysExist) {
        // return {
        //   mimeType,
        //   qualityLabel,
        //   container,
        //   fps,
        //   fileSize: (contentLength / mb / mb).toFixed(2),
        //   hasAudio,
        //   hasVideo,
        //   url,
        // };
      // }

      // return null;
    })
    // .filter(Boolean);

    return data;
  } catch (err) {
    return String(err);
  }
}

module.exports = router;
