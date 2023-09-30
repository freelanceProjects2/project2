import React, { useState, useEffect } from 'react';
import './ms-freezbe.css';

const model = {
  name: '',
  description: '',
  unitPrice: 0,
  range: 0,
  ingredients: [],
  weight: 0,
};

const Freezebee = () => {
  const [models, setModels] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Load models from local storage
    const storedModels = JSON.parse(localStorage.getItem('models'));
    if (storedModels) {
      setModels(storedModels);
    }
  }, []);

  useEffect(() => {
    // Save models to local storage
    localStorage.setItem('models', JSON.stringify(models));
  }, [models]);

  const handleAdd = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newModel = {
      name: event.target.name.value,
      description: event.target.description.value,
      unitPrice: event.target.unitPrice.value,
      range: event.target.range.value,
      ingredients: event.target.ingredients.value.split(', '),
      weight: event.target.weight.value,
    };

    setModels([...models, newModel]);
    handleClosePopup();
  };

  const handleModify = (index, event) => {
    const modifiedModel = models[index];
    modifiedModel.name = event.target.name.value;
    modifiedModel.description = event.target.description.value;
    modifiedModel.unitPrice = event.target.unitPrice.value;
    modifiedModel.range = event.target.range.value;
    modifiedModel.ingredients = event.target.ingredients.value.split(', ');
    modifiedModel.weight = event.target.weight.value;

    setModels([...models]);
  };

  const handleDelete = (index) => {
    setModels([...models.filter((model, i) => i !== index)]);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredModels = models.filter((model) => {
    return model.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="model-table">
      <h1>Model Table</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search models..." value={searchTerm} onChange={handleSearch} />
      </div>
      <div className="add-button">
        <button onClick={handleAdd}>Add Model</button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Unit Price</th>
              <th>Range</th>
              <th>Ingredients</th>
              <th>Weight</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredModels.map((model, index) => (
              <tr key={index}>
                <td>{model.name}</td>
                <td>{model.description}</td>
                <td>{model.unitPrice}</td>
                <td>{model.range}</td>
                <td>{model.ingredients.join(', ')}</td>
                <td>{model.weight}</td>
                <td>
                  <button onClick={() => handleModify(index)}>Modify</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isPopupOpen && (
        <div className="popup">
          <h1>Add Model</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="description" placeholder="Description" />
            <input type="number" name="unitPrice" placeholder="Unit Price" />
            <input type="number" name="range" placeholder="Range" />
            <input type="text" name="ingredients" placeholder="Ingredients (comma separated)" />
            <input type="number" name="weight" placeholder="Weight" />
            <div className="popup-buttons">
              <button type="submit">Submit</button>
              <button onClick={handleClosePopup}>Cancel</button>
            </div>
          </form>
          </div>
      )}

    </div>
  );
};
export default Freezebee;