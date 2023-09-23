const express = require("express");
const { connection } = require("../db/Conn");
const app = express();
app.use(express.json());
connection();

const cookieParser = require("cookie-parser");
app.use(cookieParser());
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,UPDATE,PUT,DELETE",
    credentials: true,
  })
);

const router = require("../router/contact.js");
app.use(router);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
