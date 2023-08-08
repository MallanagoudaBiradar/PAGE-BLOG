import React from 'react'
import './topbar.css'
import { FaYoutube,FaCartPlus,FaTwitter,FaFacebook,FaSearch } from 'react-icons/fa'

export default function TopBar() {
  return (
    <div>
       <h1>Car Rental System</h1>
    <div className='top'>
      <div className='topleft'>
      <FaYoutube className="icons" />   
      <FaCartPlus className="icons" /> 
      <FaTwitter className='icons' />
      <FaFacebook className='icons' />  </div>
      <div className='topcenter'>
        <ul className='topList'>
          <li className='topListItem'>Home</li>
          <li className='topListItem'>View Cars</li>
          <li className='topListItem'>Vehicle Policies</li>
          <li className='topListItem'>Reviews</li>
          <li className='topListItem'>Help and Support</li>
        </ul>
      </div>
      <div className='topright'>
        <img className='topImg' src="https://marketplace.canva.com/EAFXS8-cvyQ/1/0/1600w/canva-brown-and-light-brown%2C-circle-framed-instagram-profile-picture-2PE9qJLmPac.jpg" alt=""  />
        <FaSearch className='topSearch' />
      </div>
      
      </div>
    </div>
  )
}
