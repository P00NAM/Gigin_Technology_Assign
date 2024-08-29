import React from "react";

const PetList = ({ pets }) => {
  if (!pets.length) {
    return <p>No pets found. Try adjusting your search criteria.</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-4 mt-6">
      {pets.map((pet) => (
        <div key={pet.id} className="p-4 border rounded-md shadow-sm">
          <h2 className="text-xl font-bold">{pet.name}</h2>
          <p>{pet.animal}</p>
          <p>{pet.breed}</p>
        </div>
      ))}
    </div>
  );
};

export default PetList;
