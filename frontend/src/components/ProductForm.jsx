import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [sku, setSku] = useState('');
  const [price, setPrice] = useState('');
  const [inventoryLevel, setInventoryLevel] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const product = { name, description, sku, price, inventoryLevel };

    axios.post('/api/products', product)
      .then(response => {
        console.log(response.data);
        // Reset form fields
        setName('');
        setDescription('');
        setSku('');
        setPrice('');
        setInventoryLevel('');
      })
      .catch(error => {
        console.error('There was an error creating the product!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="SKU"
        value={sku}
        onChange={(e) => setSku(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Inventory Level"
        value={inventoryLevel}
        onChange={(e) => setInventoryLevel(e.target.value)}
      />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;
