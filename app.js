const express = require('express');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
var session = require("express-session");


const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.static(path.join(__dirname, 'client/public')));

app.use(
  session({
    secret: "asdlkf.adsjfasddfkaū9įkdsjfalkdsfdf",
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    resave: false,
  })
);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
// let indexRouter = require("./routes/index");
// app.use("/", indexRouter);

let UsersRouter = require("./routes/UsersRouter");
app.use("/", UsersRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


module.exports = app;