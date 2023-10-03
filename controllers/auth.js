import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
  
      const newUser = new User({
        ...req.body,
        password: hash,
      });
  
      await newUser.save();
      res.status(200).send("User has been created.");
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
  };
  export const login = async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).json({ msg: "User does not exist. " });
  
      const isPasswordCorrect = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!isPasswordCorrect)
        return res.status(400).json({ msg: "Invalid credentials. " });
  
      const token = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.JWT
      );
  
      const { password, ...otherDetails } = user._doc;
      res
        .cookie("info_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json({ details: { ...otherDetails } });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
  };
  