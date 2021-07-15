require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;
// for json value
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/fac", async (req, res) => {
  try {
    const num = req.body;
    // console.log(typeof(num.number));
    let fac = 1;
    let n = parseInt(num.number);
    for (let i = 1; i <= n; ++i) fac *= i;
    // console.log(fac);
    res.json({
      fac,
    });
  } catch (error) {
    res.json({
      message: "404 Error",
    });
  }
});
// app.get("/", (req, res) => {
//   res.send("Hello Rakesh");
// });

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
    app.get("*",(req,res) => {
        res.sendFile(path.join(__dirname,"client","build","index.html"));
    })
}


app.listen(PORT, () => {
  console.log(`listening..... at port ${PORT}`);
});
