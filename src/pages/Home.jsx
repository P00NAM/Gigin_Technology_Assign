import React, { useState } from "react";
import PetList from "../components/PetList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  const [pets, setPets] = useState([]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Pet Listing</h1>
      <SearchForm setPets={setPets} />
      <PetList pets={pets} />
    </div>
  );
};

export default Home;
