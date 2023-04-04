import Users from "../models/userModel.js";
import bcrypt from "bcrypt";

export const getAllUsers = async (req, res) => {
  try {
    const users = await Users.findAll({});
    res.json(users);
  } catch (error) {
    console.error(error);
  }
};

export const Register = async (req, res) => {
  const { name, email, password, confPassword, isAdmin } = req.body;
  console.log(name, email, password, confPassword, isAdmin);
  if (password !== confPassword) {
    return res.json("پسورد و تکرار آن با هم برابر نیست");
  }
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    const found = await Users.findOne({ where: { email: email } });
    // res.json(found);
    if (found) {
      return res.json("ایمیل قبلا ثبت نام کرده است");
    }
    await Users.create({
      name: name,
      email: email,
      password: hashPassword,
      isAdmin: isAdmin,
    });
    res.json({ message: "ثبت نام موفقیت آمیز بود" });
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (req, res) => {
  try {
    res.json("login");
  } catch (error) {
    res.json(error);
  }
};
