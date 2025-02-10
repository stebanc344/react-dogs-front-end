import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios'; 
import DogForm from './DogForm'; 
import DogList from './DogList'; 
import "./Home.css";


function Home() {
  const navigate = useNavigate(); 
  const [dogs, setDogs] = useState([]); 
  const [form, setForm] = useState({ id: null, name: "", breed: "", image: "", age: "", description: "" });
  const [editingId, setEditingId] = useState(null);

  // Fetching dogs from the server
  const fetchDogs = async () => {
    try {
      const response = await axios.get('http://dogs-application.herokuapp.com/dogs');
      setDogs(response.data); 
    } catch (err) {
      console.error('Error fetching dogs:', err);
    }
  };

  useEffect(() => {
    fetchDogs(); 
  }, []); 

  // Handling Input Changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Adingd or Updating Pet 
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const dogData = {
      name: form.name,
      breed: form.breed,
      age: form.age,
      image: form.image,
      description: form.description,
    };
  
    if (editingId) {
      // Update existing dog
      await axios.put(`http://dogs-application.herokuapp.com/dogs${editingId}`, dogData);
      setEditingId(null);
    } else {
      // Add new dog
      await axios.post('http://dogs-application.herokuapp.com/dogs', dogData);
    }
  
    // Reseting the form after submission
    setForm({ id: null, name: "", breed: "", age: "", image: "", description: "" });
  
    // Refreshing the dog list after submit
    fetchDogs();
  };

  // Edit Pet
  const handleEdit = (dog) => {
    setForm({
      id: dog._id,  
      name: dog.name,
      breed: dog.breed,
      age: dog.age,
      image: dog.image,
      description: dog.description
    });
    setEditingId(dog._id);  
  };

  // Delete Pet
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://dogs-application.herokuapp.com/dogs${id}`);
      setDogs(dogs.filter((dog) => dog._id !== id)); 
    } catch (error) {
      console.error("Error deleting dog:", error);
      alert("Failed to delete dog. Please try again.");
    }
  };

  // Handle Navigation to Main Page 
  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Add Your Favorite Pet</h1>
      <p>Browse or add your favorite dog</p>
      <DogForm form={form} handleChange={handleChange} handleSubmit={handleSubmit} editingId={editingId} />
      
     
      <p>USER FAVORITES</p>

      
      <DogList dogs={dogs} handleEdit={handleEdit} handleDelete={handleDelete} />

     
      <button onClick={handleGoBack}>Go back to main page</button>
    </div>
  );
}

export default Home;


