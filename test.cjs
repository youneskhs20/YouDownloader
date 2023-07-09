const fs = require("fs");
const ytdl = require("ytdl-core");
// const formats = require("./src/formats.cjs");

const url =
  "https://www.youtube.com/watch?v=ZVnF9bhIMoI&list=PL-tKrPVkKKE1Y_o_h2w85dzVdoX5t7SI0&ab_channel=JadiMirmirani`";

// fs.readFile("formats.json", "utf8", (err, data) => {
//   let formats = JSON.parse(data).formats;
//   fs.writeFile("formats.json", JSON.stringify(formats, null, 2), () => {
//     console.log("succeed");
//   });
// });

// (async () => {
//   let info = await ytdl.getInfo(url)
//   console.log(info.formats);
// })()

(async () => {
  fetch(`http://localhost:2006/download?url=${url}`)
    .then((res) => res.json())
    .then((data) => {
      fs.writeFile("formats.json", JSON.stringify(data, null, 2), () => {
        console.log("succeed");
      });
    });
})();

// (async () => {
//   let data;
//   let info = await ytdl.getBasicInfo(url);
//   let format = ytdl.chooseFormat(info.formats, { quality: 18 });
//   let formatt = info.formats.find((i) => i.qualityLabel === videoQuality);
//   console.log(info.videoDetails);
//   info = JSON.stringify(info, null, 2);
//   // ytdl(url, { quality: 137 }).pipe(fs.createWriteStream("video.mp4"));
// })();

// (async () => {
//   fetch(`http://localhost:2006/download?url=${encodeURIComponent(url)}`)
//     .then((res) => res.json())
//     .then((data) => {
//       fs.writeFile('formats.js', JSON.stringify(data), () => {
//         console.log('succeed');
//       })
//     });
// })();

// async function getFormatsAndQualities(url) {
//   try {
//     const res = await ytdl.getBasicInfo(url);
//   } catch(err) {
//     console.log(err);
//   }
// }

// getFormatsAndQualities(url);
