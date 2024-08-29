import axios from "axios";

const API_BASE = "http://pets-v2.dev-apis.com";

export const fetchPets = async () => {
  try {
    const response = await axios.get(`${API_BASE}/pets`);
    return response.data.pets;
  } catch (error) {
    throw new Error("Failed to fetch pets");
  }
};

export const fetchPetById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE}/pets?id=${id}`);
    return response.data.pets[0];
  } catch (error) {
    throw new Error("Failed to fetch pet details");
  }
};

export const fetchBreedsByAnimalType = async (animal) => {
  try {
    const response = await axios.get(`${API_BASE}/breeds?animal=${animal}`);
    return response.data.breeds;
  } catch (error) {
    throw new Error("Failed to fetch breeds");
  }
};

export const searchPets = async (animal, location, breed) => {
  try {
    const response = await axios.get(`${API_BASE}/pets?animal=${animal}&location=${location}&breed=${breed}`);
    return response.data.pets;
  } catch (error) {
    throw new Error("Failed to search pets");
  }
};
