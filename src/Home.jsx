import React, { useEffect, useState } from "react";
import "./Home.css";
export default function Home({ Produts }) {
  let [allCtaegory, setallCtaegory] = useState([]);
  let [FilteredData, setFilteredData] = useState(Produts);


  useEffect(() => {
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


  function FilterData(e) {
    console.log(e.target.value);
    let Choice = e.target.value;
    if (Choice == "All Category") {
      setFilteredData(Produts);
      return;
    }
    setFilteredData(Produts.filter((e) => e.category == Choice));
  }


  // function PriceFilter(e)
  // {
  //   console.log(e.target.value);
  // }
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
{/* 
            <div id="Price">
              <p>Price</p>
              <input min={100} max={10000} type="range" onChange={(e)=>PriceFilter(e)} />
            </div> */}

        </div>
      </nav>

      <div id="ProductContainer">
        {FilteredData.map((e,i) => (
          <div key={i} className="Product">
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
