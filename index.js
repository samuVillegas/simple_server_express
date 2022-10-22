const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
require("dotenv").config()

const app = express();

app.use(morgan("dev"));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./routes"))

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})