import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Home.css";
export default function Home({ Produts,setSelectedProduct }) {
  let [allCtaegory, setallCtaegory] = useState([]);
  let [NewData, setNewData] = useState(Produts);
  let navigate = useNavigate();



  useEffect(() => {
    setNewData(Produts)
    console.log(Produts);
    // Find The Unique Category of All Products:
    let allCategory = [];
    Produts.map((e) => {
      if (!allCategory.includes(e.category)) {
        allCategory.push(e.category);
      }
    });
    setallCtaegory(allCategory);
    console.log(allCtaegory);
  }, [Produts]);



  function handleProductClick(e)
  {
    console.log(e)
    // Open a Page with Route:
    setSelectedProduct(e)
    navigate('/ProductPage')
  
  }



  function FilterData(e)
  {
    let Selected = e.target.value;
    if (Selected == "All Category")
    {
      setNewData(Produts);
      return;
    }
    setNewData(Produts.filter((e)=>e.category == Selected));
  }



  return (
    <div id="MainContainer">
      <nav>
        <h2>All Product</h2>
        <div id="filter">

          <select onChange={(e) => FilterData(e)}>
            <option>All Category</option>
            {allCtaegory.map((e,i) => (
              <option key={i}>{e}</option>
            ))}
          </select>


        </div>
      </nav>

      <div id="ProductContainer">
        {NewData.map((e, i) => (
          <div key={i} className="Product" onClick={() => handleProductClick(e)}>
            <img src={e.file} alt="" />
            <div className="ProductContent">
              <h3>{e.productName}</h3>
              <h4>{e.productPrice}</h4>
              <h5>{e.purchaseDate}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
