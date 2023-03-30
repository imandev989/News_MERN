import Users from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await Users.findAll({});
    res.json(users);
  } catch (error) {
    console.error(error);
  }
};

export const Register = async (req, res) => {
  try {
    const { name, email, password, confPassword, isAdmin } = req.body;
    console.log(name, email, password, confPassword, isAdmin);
    res.json("register");
  } catch (error) {
    console.log(error);
  }
};
