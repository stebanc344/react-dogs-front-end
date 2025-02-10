import React from 'react';

const DogList = ({ dogs, handleEdit, handleDelete }) => {
  return (
    <div className="dog-list">
      {dogs.map((dog) => (
        <div key={dog.id} className="dog-card">
          <img src={dog.image} alt={dog.name} className="dog-image" />
          <h3>{dog.name}</h3>
          <p>Breed: {dog.breed}</p>
          <p>Age: {dog.age}</p> 
          <button onClick={() => handleEdit(dog)}>Edit</button>
          <button onClick={() => handleDelete(dog._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default DogList;