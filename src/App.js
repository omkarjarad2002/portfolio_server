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
    origins: "https://localhost:3000",
    methods: "GET,POST,UPDATE,PUT,DELETE",
    credentials: true,
    withCredentials: true,
  })
);

const router = require("../router/contact.js");
app.use(router);

const messageRouter = require("../router/getMessages.js");
app.use(messageRouter);

const getallprojects = require("../router/getallprojects.js");
app.use(getallprojects);

const projectRouter = require("../router/addnewproject.js");
app.use(projectRouter);

const imageUploadRouter = require("../router/ImageUpload.js");
app.use(imageUploadRouter);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
