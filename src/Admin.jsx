import React, { useState } from 'react';
import './Admin.css';  // Import the CSS file
import { Link } from 'react-router-dom';
export default function Admin({ Produts, setProducts }) {
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = {
      file: image,
      productName: e.target.productName.value,
      productPrice: e.target.productPrice.value,
      purchaseDate: e.target.purchaseDate.value,
    };
    setProducts([...Produts, data]);
    console.log(data);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            type="file" 
            name="file" 
            onChange={handleImageChange}
          />
        </div>
        <div>
          <input 
            type="text" 
            name="productName" 
            placeholder="Name Of Product" 
          />
        </div>
        <div>
          <input 
            type="text" 
            name="productPrice" 
            placeholder="Price Of Product" 
          />
        </div>
        <div>
          <input 
            type="date" 
            name="purchaseDate" 
            placeholder="Date of Purchase" 
          />
        </div>
        <Link to={"/"}>
        <button type="submit">Submit</button></Link>
      </form>
      <p>Uploaded Image</p>
      {image && <img height={100} src={image} alt="Product" style={{ marginTop: '20px', maxWidth: '100%' }} />}
    </div>
  );
}
