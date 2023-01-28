import { PetMongoDao } from "../daos/petMongoDao.js";
import { Pet as PetModel } from "../model/pet.model.js";

const Pet = new PetMongoDao(PetModel);

const getAllPets = async (req, res) => {
  try {
    const response = await Pet.getAll();
    res.json(response);
  } catch (err) {
    throw new Error();
  }
};

const createPet = async (req, res) => {
  try {
    const response = await Pet.create(req.body);
    res.json(response);
  } catch (err) {
    throw new Error(err);
  }
};

const getPetById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Pet.getById(id);
    res.json(response);
  } catch (err) {
    throw new Error(err);
  }
};

const updatePetById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Pet.update(id, req.body);
    res.json(response);
  } catch (err) {
    throw new Error(err);
  }
};

const deletePetById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Pet.delete(id);
    res.json(response);
  } catch (err) {
    throw new Error(err);
  }
};

export const petController = {
  getAllPets,
  createPet,
  getPetById,
  updatePetById,
  deletePetById,
};
