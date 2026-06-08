require("dotenv").config();

const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const githubRoutes =
require("./routes/githubroutes");

app.use("/api", githubRoutes);

app.get("/", (req,res)=>{

  res.send(
    "GitHub Profile Analyzer Running"
  );
});

const PORT =
process.env.PORT || 5000;

app.listen(PORT, ()=>{

  console.log(
    `Server Running On ${PORT}`
  );
});