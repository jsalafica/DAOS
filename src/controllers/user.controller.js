import { UserMongoDao } from "../daos/userMongoDao.js";
import { User as UserModel } from "../model/user.model.js";

const User = new UserMongoDao(UserModel);

const getAllUsers = async (req, res) => {
  try {
    const response = await User.getAll();
    res.json(response);
  } catch (err) {
    throw new Error();
  }
};

const createUser = async (req, res) => {
  try {
    const response = await User.create(req.body);
    res.json(response);
  } catch (err) {
    throw new Error(err);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await User.getById(id);
    res.json(response);
  } catch (err) {
    throw new Error(err);
  }
};

const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await User.update(id, req.body);
    res.json(response);
  } catch (err) {
    throw new Error(err);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await User.delete(id);
    res.json(response);
  } catch (err) {
    throw new Error(err);
  }
};

export const userController = {
  getAllUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
};
