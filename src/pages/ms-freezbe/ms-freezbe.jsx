import React, { useState, useEffect } from 'react';
import "./ms-freezbe.css";

const model = {
  name: '',
  description: '',
  unitPrice: 0,
  range: 0,
  ingredients: [],
  weight: 0,
};

const Msfreezbe = () => {
  const [models, setModels] = useState([model]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAdd = () => {
    const newModel = { ...model };
    setModels([...models, newModel]);
  };

  const handleModify = (index) => {
    const modifiedModel = { ...models[index] };
    setModels((prevModels) => {
      prevModels[index] = modifiedModel;
      return prevModels;
    });
  };

  const handleDelete = (index) => {
    setModels((prevModels) => prevModels.filter((model, i) => i !== index));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredModels = models.filter((model) => {
    return model.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h1>Freezebee Manager</h1>
      <div>
        <input type="text" placeholder="Search models..." value={searchTerm} onChange={handleSearch} />
      </div>
      <div>
        <button onClick={handleAdd}>Add Model</button>
      </div>
      <div>
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
    </div>
  );
};

export default Msfreezbe;

 