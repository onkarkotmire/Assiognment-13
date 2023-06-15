import React, { useState, useEffect } from 'react';

const ProductForm = ({ item }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const[submittedname, setSubmittedName] = useState({name: "", price: ""});

  useEffect(() => {
    if (item) {
      const { name, price } = item;
      setName(name || '');
      setPrice(price || '');
    }
  }, [item]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      name,
      price,
    };
    // I am consoling the new data 
    console.log(newItem);
    // onchange of component's prop values, Resettting the form fields 
    setName('');
    setPrice('');
    setSubmittedName({name: name, price: price})
  };

  return (
    <div style={{border: "1px solid black", width: "40vw"}}>
      <h2>Assignment-13</h2>
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Price:
          <input type="number" value={price} onChange={handlePriceChange} />
        </label>
        <br />
        <button type="submit">Add</button>
      </form>
      <p>Submitted Name : {submittedname.name}</p>
      <p>Submitted Price: {submittedname.price}</p>
    </div>
  );
};

export default ProductForm;