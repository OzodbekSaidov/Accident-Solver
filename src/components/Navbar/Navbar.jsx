import React from 'react'
import './navbar.css'
import { FaSearch } from "react-icons/fa";
import back from '../../images/back.jpg'
import { useNavigate } from 'react-router-dom';
import { HOME_PAGE, LOGIN_PAGE } from '../../constants/routes';

function Navbar() {
  const navigate = useNavigate();

  return (
    <>

      <div className="navbar">
        <div onClick={() => navigate(HOME_PAGE)} className="logo">
          <img src={back} alt="" />
        </div>

        <div className="kategoria">
        <ul>
          <li><h2>The Problem</h2></li>
          <li><h2>Main Idea </h2></li>
          <li><h2>Sollution</h2></li>
        </ul>
        </div>
        <a href="https://t.me/trmsrd_bot"><img style={{ width: "2rem", position: "relative",left: "5rem" }} src="https://static-00.iconduck.com/assets.00/telegram-icon-1024x862-5ov8mojz.png" alt="" /></a>

        <div className="battn">

          <button onClick={() => navigate(LOGIN_PAGE)} className='knopka'>Login</button>
        </div>
        
        
      </div>

    </>
  )
}

export default Navbar