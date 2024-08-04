import React from 'react';
import Applypage from './Apply-page';
import chatbot from '../Picture/chatbotDevelopment.webp';
import graphic from '../Picture/logo-designer-working-computer-desktop.webp';
import backend from '../Picture/BackendDevelopment.webp';
import { Link } from 'react-router-dom';

export default function MobileAppapply() {
  return (
    <>
      <Applypage intern1 = {"Flutter Development"} intern2 = {"React Native Internship"} intern3 = {"Swift Internship"} intern4 = {"Android Internship"}/>
      <div className="heading-container">
      <div className="intern-heading-containers">
        <p><b>Internships every months</b> Introducing Internee.pk, the ultimate platform designed to turbocharge the IT sector in Pakistan! We recognize the immense potential of talented individuals in the country and aim to bridge the gap between them and the thriving IT industry. Internee.pk offers a comprehensive range of virtual internship opportunities exclusively in the IT field.
</p>
      </div>
      <div className="intern-heading-containers">
     <Link style={{textDecoration:"None"}} to="/Apply-Page" ><button class="button">
  Browse Internships
  <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
    <path
      clip-rule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
      fill-rule="evenodd"
    ></path>
  </svg>
</button>
</Link>

      </div>
      </div>
      <div className="main-containers">
      <div className="intern-containers">
        <img src={backend} alt="Backend picture" />
        <h5 style={{margin:"20px"}}>Backend Development</h5>
        <hr style={{width:"22svw",marginLeft:'20px'}}/>
        <button class="button" style={{alignSelf:"end", marginRight:"20px", boxShadow:" 0px 0px 0px rgba(0, 0, 0, 0.2)"}}>
  Apply Now
  <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
    <path
      clip-rule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
      fill-rule="evenodd"
    ></path>
  </svg>
</button>
      </div>
      <div className="intern-containers">
        <img src={graphic} alt="Graphic picture" />
        <h5 style={{margin:"20px"}}>Graphic Designer</h5>
        <hr style={{width:"22svw",marginLeft:'20px'}}/>
        <button class="button" style={{alignSelf:"end", marginRight:"20px", boxShadow:" 0px 0px 0px rgba(0, 0, 0, 0.2)"}}>
  Apply Now
  <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
    <path
      clip-rule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
      fill-rule="evenodd"
    ></path>
  </svg>
</button>
      </div>
      <div className="intern-containers">
        <img src={chatbot} alt="chatbot picture" />
        <h5 style={{margin:"20px"}}>Chatbot Development</h5>
        <hr style={{width:"22svw",marginLeft:'20px'}}/>
        <button class="button" style={{alignSelf:"end", marginRight:"20px", boxShadow:" 0px 0px 0px rgba(0, 0, 0, 0.2)"}}>
  Apply Now
  <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
    <path
      clip-rule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
      fill-rule="evenodd"
    ></path>
  </svg>
</button>
      </div>
      </div>
    </>
  )
}
