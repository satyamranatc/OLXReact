import React from 'react'
import "./Cart.css"
export default function Cart({CartProducts}) {
  return (
    <div>
        <center>
            <h1>
                Cart
            </h1>
            <hr />
            {
                CartProducts.map((e)=>(
                    <div>
                        <img src={e.file} alt="" />
                        <h2>{e.productName}</h2>
                        <h3>{e.productPrice}</h3>
                        <hr />
                    </div>

                ))
            }
        </center>
    </div>
  )
}
