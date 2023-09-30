import React from 'react';

const Popup = ({ model, onSubmit }) => {
  return (
    <div className="popup">
      <h1>Add Model</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={model.name}
          autoFocus
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={model.description}
        />
        <input
          type="number"
          name="unitPrice"
          placeholder="Unit Price"
          value={model.unitPrice}
        />
        <input
          type="number"
          name="range"
          placeholder="Range"
          value={model.range}
        />
        <input
          type="text"
          name="ingredients"
          placeholder="Ingredients"
          value={model.ingredients}
        />
        <input
          type="number"
          name="weight"
          placeholder="Weight"
          value={model.weight}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Popup;