import React from 'react'
import "./ProductPage.css"
export default function ProductPage({SelectedProduct}) {
    console.log(SelectedProduct)
  return (

    <div className='ProdutPage'>
        <div className="Pic">
            <img src={SelectedProduct.file} alt="" />
        </div>
        <div className="ProductInfo">
            <h2>{SelectedProduct.productName}</h2>
            <h3>{SelectedProduct.productPrice}</h3>
            <h4>{SelectedProduct.purchaseDate}</h4>
            <h5>{SelectedProduct.category}</h5>
        </div>




    </div>
  )
}
