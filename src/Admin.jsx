import React, { useState } from 'react';
import './Admin.css';  // Import the CSS file

export default function Admin() {
  const [formData, setFormData] = useState();


  const handleSubmit = (e) => {
    e.preventDefault();
    
    let data =  {
      file: e.target[0].value,
      productName: e.target[1].value,
      productPrice: e.target[2].value,
      purchaseDate: e.target[3].value
    }
    

    console.log(data);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            type="file" 
            name="file" 
    
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
