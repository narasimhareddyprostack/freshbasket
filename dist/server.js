"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _userRouter = _interopRequireDefault(require("./router/userRouter"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); //middleware

app.use((0, _cors["default"])());
app.use((0, _morgan["default"])("tiny"));
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json()); //read form data using express

/* app.use(express.json());
app.use(express.urlencoded({ extended: true })); */

_dotenv["default"].config({
  path: "./config/config.env"
});

var PORT = 8000 || process.env.PORT;
app.get("/", function (req, res) {
  res.send("<h1>FreshBastek application running Successfully</h1>");
}); //Routers

app.use("/user", _userRouter["default"]);

_mongoose["default"].connect(process.env.MONGODB_LOCAL_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(function (response) {
  console.log("Mongo DB connected Successfully");
})["catch"](function (err) {
  console.log("Error");
});

app.listen(PORT, function (err) {
  if (err) throw err;
  console.log("Server is running on port number ".concat(PORT));
});