"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post("/signup", function (req, res) {
  console.log("Inside Signup....");
  console.log(req.body);
  var name = req.body.name;
  console.log(name);
});
var _default = router;
exports["default"] = _default;