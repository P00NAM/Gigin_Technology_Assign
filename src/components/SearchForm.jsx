import React, { useState, useEffect } from "react";
import { fetchBreedsByAnimalType, searchPets } from "../services/api";

const SearchForm = ({ setPets }) => {
  const [animal, setAnimal] = useState("dog");
  const [location, setLocation] = useState("");
  const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const loadBreeds = async () => {
      const breeds = await fetchBreedsByAnimalType(animal);
      setBreeds(breeds);
    };

    loadBreeds();
  }, [animal]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const pets = await searchPets(animal, location, breed);
    setPets(pets);
  };

  return (
    <form onSubmit={handleSearch} >
      <select className="search-animal" value={animal} onChange={(e) => setAnimal(e.target.value)} >
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="bird">Bird</option>
      </select>

      <input
      className="search-list"
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      
      />

      <select className="search-breed" value={breed} onChange={(e) => setBreed(e.target.value)} >
        <option value="">Select Breed</option>
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>

      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
