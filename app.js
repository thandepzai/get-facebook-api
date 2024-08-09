var express = require("express");
var axios = require("axios"); // Import Axios
const FormData = require("form-data");
const cors = require("cors");

var app = express();
app.use(cors());

// axios
// .get(`https://ffb.vn/api/tool/get-id-fb?idfb=${fburl}`) => Cái này ngon ác

// https://layid.vn/api/get-uid

// https://lookup-id.com/
// Trao đổi sub

app.get("/", function (req, res) {
  const fburl = req.query.url; // Sử dụng req.query để lấy tham số từ URL query string
  if (!fburl) {
    return res.status(400).send("Missing url parameter");
  }
  const form = new FormData();
  form.append("link", fburl);
  //   form.append("check", "Lookup");

  //   axios
  //     .post("https://fchat-app.salekit.com:4039/api/v1/facebook/get_uid", form, {
  //       headers: {
  //         ...form.getHeaders(), // Đảm bảo bao gồm headers để axios biết đây là FormData
  //       },
  //     })
  //     .then((response) => {
  //       if (response.data) {
  //         const htmlData = response.data; // Định nghĩa biến htmlData từ response.data
  //         console.log("🚀 ~ .then ~ htmlData:", htmlData)

    axios
      .get(`https://ffb.vn/api/tool/get-id-fb?idfb=${fburl}`)
      .then((response) => {
        if (response.data) {
          const htmlData = response.data; // Định nghĩa biến htmlData từ response.data

          res.send({ uid: htmlData.id }); // Thay res.send bằng console.log để kiểm tra
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

});
app.listen(4000, function () {
  console.log("Example app listening on port 3000!");
});
