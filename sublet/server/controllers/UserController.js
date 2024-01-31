const User = require("../model/UserModel.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = "fjdslo3dsfewo32sdlfowqdsfew";

const getUser = async (req, res) => {
  console.log("the login is working");
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user) {
      const passOk = bcrypt.compareSync(password, user.password);
      if (passOk) {
        jwt.sign(
          { username: user.username, id: user._id },
          jwtSecret,
          {},
          (err, token) => {
            if (err) throw err;

            res.cookie("token", token).json({
              msg: "user gotten",
              loggdeIn: true,
              username: user.username,
            });
          }
        );
      } else {
        res.json({
          msg: "password is incorrect",
        });
      }
    }
  } catch (error) {
    res.json({ msg: "server error" });
  }
};

const createUser = async (req, res) => {
  const { username, password } = req.body;
  let bcryptSalt = bcrypt.genSaltSync(10);
  try {
    const newUser = await User.create({
      username,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json({ msg: "successful" });
    // res.send("user created");
  } catch (error) {
    res.json({ msg: "something happened" });
    // res.send("user not created");
  }
};

const updateUser = async (req, res) => {
  try {
    res.send("user updated");
  } catch (error) {
    res.send("user not updated");
  }
};
const deleteUser = async (req, res) => {
  try {
    res.send("user deleted");
  } catch (error) {
    res.send("user not deleted");
  }
};

const getProfile = async (req, res) => {
  const { token } = req.cookies;
  try {
    if (token) {
      jwt.verify(token, jwtSecret, {}, (err, token) => {
        if (err) throw err;
        res.json({ username: token.username });
      });
    }
  } catch (error) {
    console.log("something happened");
  }
};

module.exports = { getUser, createUser, updateUser, deleteUser, getProfile };
