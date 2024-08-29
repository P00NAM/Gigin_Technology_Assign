import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPetById } from "../services/api";

const PetDetails = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPetDetails = async () => {
      try {
        const data = await fetchPetById(id);
        setPet(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadPetDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold">{pet.name}</h2>
      <p>Animal: {pet.animal}</p>
      <p>Breed: {pet.breed}</p>
      <p>Description: {pet.description}</p>
      <img src={pet.images[0]} alt={pet.name} className="rounded-md" />
    </div>
  );
};

export default PetDetails;
