import React from 'react';
import facebook from './Job portal Picture/icons8-facebook-f.svg';
import Linkedin from './Job portal Picture/icons8-linkedin-2.svg';
import instagram from './Job portal Picture/icons8-instagram.svg';
import whatsapp from './Job portal Picture/icons8-whatsapp.svg';
import location from './Job portal Picture/icons8-location-50.png';

export default function Footer() {
  return (
    <>
      <div className="j-footer-m-cont">
        <div className="content-cont j-s-m-cont">
            <h5>About</h5>
            <p>Internee.pk kickstart student's tech careers with first internships, providing industry exposure, practical skills, and networking opportunities, paving the way for their success in the tech industry.</p>
            <div className='j-social-cont'>
                <a href="#" target="_blank"><img src={facebook} alt="" /></a>
                <a href="#" target="_blank"><img src={Linkedin} alt="" /></a>
                <a href="#" target="_blank"><img src={instagram} alt="" /></a>
                <a href="#" target="_blank"><img src={whatsapp} alt="" /></a>
            </div>
        </div>
        <div className="content-cont j-about-m-cont">
          <h5>Have a Questions?</h5>
          <div><img src={location} alt="" /></div><p >Aiwan-e-Tijarat Rd, Seari Quarters, Karachi, Karachi City, Sindh 74000</p>
          <div><span></span><span></span></div>
          <div><span></span><span></span></div>
        </div>
      </div>
    </>
  )
}
