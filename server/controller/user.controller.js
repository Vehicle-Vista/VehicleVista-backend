import bcryptjs from "bcryptjs";
import { ErrorHandler } from "../utils/error.js";
import User from "../models/user.model.js";

export const test = (req, res) => {
  res.json({ data: "Server is running" });
};

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(ErrorHandler(401, "You can update only your own account!"));
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );
    const { password, ...others } = updatedUser._doc;
    res.status(200).json(others);
  } catch (error) {}
};

export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return ErrorHandler(401, "You can only delete your own account");
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User Deleted Successfully");
  } catch (error) {
    next(error);
  }
};
