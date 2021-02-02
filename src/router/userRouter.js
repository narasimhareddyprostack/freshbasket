import express from "express";

const router = express.Router();

router.post("/signup", (req, res) => {
  console.log("Inside Signup....");
  console.log(req.body);
  let name = req.body.name;
  console.log(name);
});

export default router;
