import React from 'react'
import { Link } from 'react-router-dom'
import searchIcon from './Media/search-regular-24 (3).png';

export default function NavBar() {
  return (
    <nav id = "HomeNav">
    <h2>OLX</h2>
    <div id="SearchBar">
      <input placeholder='Search Products....' type="text" />
      <img src={searchIcon} alt="" />
    </div>
    <ul>
      <li><Link to={""} >Home</Link></li>
      <li><Link to={"/Admin"} >Add Product</Link></li>

    </ul>
  </nav>
  )
}
