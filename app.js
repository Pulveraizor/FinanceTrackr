const express = require('express');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require("express-session");
const db = require("./db/mysql");
const UsersRouter = require("./routes/UsersRouter");
const app = express();
const port = process.env.PORT || 5000;

app.use(function (req, res, next) {
  req.db = db;
  next();
});

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.static(path.join(__dirname, 'client/public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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


app.use("/users", UsersRouter);
// app.use('/dash', require('./routes/DashboardRouter'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


module.exports = app;