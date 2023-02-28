const mongoose = require("mongoose");
const {checkPassword, createPasswordHash} = require("../util/hash");
const {UserModel, PasswordModel} = require("../models");
const {generateJWT} = require("../util/token");

async function createUser(req, res) {
  try {
    const {firstName, lastName, email, password} = req.body;
    const hash = await createPasswordHash(password);
    console.log(hash);
    const existingUser = await UserModel.findOne({email});

    if (existingUser) {
      //
      // Email is registered
      //
      const existingPassword = await PasswordModel.findOne({
        userId: existingUser._id.toString()
      });
      if (existingPassword)
        return res.status(400).json({message: "User already exists 💀"});

      // User exists, but without a password
      // Make the password entry
      const newPassword = new PasswordModel({
        userId: existingUser._id,
        hash: hash
      });
      const newPasswordId = await newPassword.save();

      return res.status(201).json({
        user: existingUser._id,
        password: newPasswordId,
        message: "created!"
      });

    } else {
      //
      // Email is not registered, so create a user
      //
      const session = await mongoose.startSession();
      await session.startTransaction();
      console.log("Started transaction");

      // Make the User
      const newUser = new UserModel({
        firstName, lastName, email
      });
      console.log(newUser);
      const newId = await newUser.save();
      console.log(newId);
      // Make the password entry
      const newPassword = new PasswordModel({
        userId: newId,
        hash: hash
      });
      const newPasswordId = await newPassword.save();

      await session.commitTransaction();
      console.log("Committed transaction");

      return res.status(201).json({
        user: newId,
        password: newPasswordId,
        message: "created!"
      });

    }
  } catch (e) {
    return res.status(500).json({
      error: e,
      message: "Something went wrong oopsie daisy 💀"
    });
  }
}


async function loginUser(req, res) {
  const {email, password} = req.body;
  const user = await UserModel.findOne({email});
  if (!user)
    return res.status(400).json({message: "you fail 💀"});
  const userId = user._id.toString();
  const passwordObject = await PasswordModel.findOne({userId});
  const {hash} = passwordObject;
  if (!(await checkPassword(password, hash))) {
    return res.status(400).json({message: "you fail 💀"});
  }

  const token = generateJWT(userId);

  return res.status(200).json({token});
}

async function getProfile(req, res) {
  if (req.user)
    return res.status(200).json({email: req.user.email});
  else
    return res.status(404).json({message: "user not logged in 💀"});
}


async function getUserById(userId) {
  const result = await UserModel.findOne({_id: userId});
  console.log(`getUserById(${userId}) called: ${result} found`);
  return result;
}


module.exports = {createUser, loginUser, getUserById, getProfile};