import asyncHandler from "express-async-handler";
import User from "../../models/auth2/UserModel.js";

// DELETE USER
export const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const user = await User.findByIdAndDelete(id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json({ message: "User deleted successfully" });
});

// GET ALL USERS
export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});

  if (!users || users.length === 0) {
    return res.status(404).json({ message: "No users found" });
  }

  res.status(200).json(users);
});