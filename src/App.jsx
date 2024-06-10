import React, { useState,useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Admin from './Admin'
import UserLoginSection from './UserLoginSection'
import NavBar from './NavBar'
import Home from './Home'
import "./App.css"
import ProductPage from './ProductPage'
import axios from 'axios'

export default function App() {
  let [LoginSuccess, setLoginSuccess] = useState(false);
  let [SelectedProduct, setSelectedProduct] = useState({});
  let [SearchFilter, setSearchFilter] = useState(SelectedProduct);
  let [SearchText, setSearchText] = useState();
  const [Produts, setProducts] = useState([]);
 useEffect(()=>{
  setProducts([
    {
      "file": "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?cs=srgb&dl=pexels-pixabay-47547.jpg&fm=jpg",
      "productName": "Wireless Headphones",
      "productPrice": 99.99,
      "purchaseDate": "2023-05-15",
      "category": "Electronics"
    },
    {
      "file": "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?cs=srgb&dl=pexels-pixabay-47547.jpg&fm=jpg",
      "productName": "Leather Briefcase",
      "productPrice": 149.5,
      "purchaseDate": "2023-04-22",
      "category": "Accessories"
    },
    {
      "file": "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?cs=srgb&dl=pexels-pixabay-47547.jpg&fm=jpg",
      "productName": "Yoga Mat",
      "productPrice": 24.99,
      "purchaseDate": "2023-06-01",
      "category": "Fitness"
    },
    {
      "file": "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?cs=srgb&dl=pexels-pixabay-47547.jpg&fm=jpg",
      "productName": "Bluetooth Speaker",
      "productPrice": 59.99,
      "purchaseDate": "2023-03-10",
      "category": "Electronics"
    },
    {
      "file": "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?cs=srgb&dl=pexels-pixabay-47547.jpg&fm=jpg",
      "productName": "Noise-Cancelling Headphones",
      "productPrice": 199.99,
      "purchaseDate": "2023-02-28",
      "category": "Electronics"
    },
    {
      "file": "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?cs=srgb&dl=pexels-pixabay-47547.jpg&fm=jpg",
      "productName": "Smartwatch",
      "productPrice": 149.99,
      "purchaseDate": "2023-05-05",
      "category": "Electronics"
    },
    {
      "file": "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?cs=srgb&dl=pexels-pixabay-47547.jpg&fm=jpg",
      "productName": "Leather Jacket",
      "productPrice": 249.99,
      "purchaseDate": "2023-04-18",
      "category": "Fashion"
    },
    {
      "file": "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?cs=srgb&dl=pexels-pixabay-47547.jpg&fm=jpg",
      "productName": "Fitness Tracker",
      "productPrice": 79.99,
      "purchaseDate": "2023-03-25",
      "category": "Fitness"
    },
    {
      "file": "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?cs=srgb&dl=pexels-pixabay-47547.jpg&fm=jpg",
      "productName": "External Hard Drive",
      "productPrice": 69.99,
      "purchaseDate": "2023-06-02",
      "category": "Electronics"
    },
    {
      "file": "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?cs=srgb&dl=pexels-pixabay-47547.jpg&fm=jpg",
      "productName": "DSLR Camera",
      "productPrice": 799.99,
      "purchaseDate": "2023-04-10",
      "category": "Electronics"
    },
    {
      "file": "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?cs=srgb&dl=pexels-pixabay-47547.jpg&fm=jpg",
      "productName": "Backpack",
      "productPrice": 59.99,
      "purchaseDate": "2023-05-20",
      "category": "Accessories"
    },
    {
      "file": "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?cs=srgb&dl=pexels-pixabay-47547.jpg&fm=jpg",
      "productName": "Wireless Mouse",
      "productPrice": 24.99,
      "purchaseDate": "2023-03-15",
      "category": "Electronics"
    },
    {
      "file": "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?cs=srgb&dl=pexels-pixabay-47547.jpg&fm=jpg",
      "productName": "Sunglasses",
      "productPrice": 89.99,
      "purchaseDate": "2023-06-03",
      "category": "Accessories"
    },
    {
      "file": "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?cs=srgb&dl=pexels-pixabay-47547.jpg&fm=jpg",
      "productName": "Laptop",
      "productPrice": 1099.99,
      "purchaseDate": "2023-04-05",
      "category": "Electronics"
    },
    {
      "file": "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?cs=srgb&dl=pexels-pixabay-47547.jpg&fm=jpg",
      "productName": "Hiking Boots",
      "productPrice": 129.99,
      "purchaseDate": "2023-05-12",
      "category": "Outdoor"
    },
    {
      "file": "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?cs=srgb&dl=pexels-pixabay-47547.jpg&fm=jpg",
      "productName": "Wireless Keyboard",
      "productPrice": 39.99,
      "purchaseDate": "2023-03-28",
      "category": "Electronics"
    },
    {
      "file": "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?cs=srgb&dl=pexels-pixabay-47547.jpg&fm=jpg",
      "productName": "Smartwatch",
      "productPrice": 199.99,
      "purchaseDate": "2023-06-01",
      "category": "Electronics"
    },
    {
      "file": "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?cs=srgb&dl=pexels-pixabay-47547.jpg&fm=jpg",
      "productName": "Wireless Charger",
      "productPrice": 29.99,
      "purchaseDate": "2023-04-25",
      "category": "Electronics"
    },
    {
      "file": "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?cs=srgb&dl=pexels-pixabay-47547.jpg&fm=jpg",
      "productName": "Messenger Bag",
      "productPrice": 79.99,
      "purchaseDate": "2023-05-08",
      "category": "Accessories"
    },
    {
      "file": "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?cs=srgb&dl=pexels-pixabay-47547.jpg&fm=jpg",
      "productName": "Bluetooth Earbuds",
      "productPrice": 49.99,
      "purchaseDate": "2023-03-20",
      "category": "Electronics"
    }
  ])
},[])


useEffect(()=>{  
  // If The Len Of Search tEXT is < 0 Set to All:
 
},[SearchText])


function UserLogiIn(setProducts = "") {
  return LoginSuccess ? <Admin setProducts = {setProducts} /> : <UserLoginSection setLoginSuccess={setLoginSuccess} />
}
return (
  <div>
      <BrowserRouter>
        <NavBar setSearchText = {setSearchText} />
        <Routes>
          <Route path="/" element={<Home setSelectedProduct = {setSelectedProduct} Produts = {Produts} />} />
          {/* <Route path="/Admin/*" element={UserLogiIn(setProducts)} /> */}
          <Route path="/Admin/*" element={<Admin Produts= {Produts}  setProducts = {setProducts}  />} />
          <Route path="/ProductPage" element={<ProductPage SelectedProduct = {SelectedProduct} />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
