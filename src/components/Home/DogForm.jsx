import React from 'react';

const DogForm = ({ form, handleChange, handleSubmit, editingId }) => {
  return (
    <form onSubmit={handleSubmit}>
    <label>Name</label>
    <input
      type="text"
      name="name"
      value={form.name}
      onChange={handleChange}
    />
    <label>Breed</label>
    <input
      type="text"
      name="breed"
      value={form.breed}
      onChange={handleChange}
    />
    <label>Age</label>
    <input
      type="number"
      name="age"
      value={form.age}
      onChange={handleChange}
    />
    <label>Image URL</label>
    <input
      type="text"
      name="image"
      value={form.image}
      onChange={handleChange}
    />
    <label>Description</label>
    <textarea
      name="description"
      value={form.description}
      onChange={handleChange}
    ></textarea>
    <button type="submit">
      {editingId ? "Update Dog" : "Add Dog"}
    </button>
  </form>
  );
};

export default DogForm;
