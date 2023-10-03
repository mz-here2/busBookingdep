import User from "../models/User.js";



export const getUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
  };


  export const deleteUser = async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted.");
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
  };
  