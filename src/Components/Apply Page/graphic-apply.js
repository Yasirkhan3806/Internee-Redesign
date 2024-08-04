import React from 'react';
import { Link } from 'react-router-dom';
import mobileApp from '../Picture/Mobile App Developer.webp';
import dataAnalysis from '../Picture/analysis.webp';
import digital from '../Picture/marketing-assistant.webp';
import photoshop from './Apply Page picture/graphic apply pictures/photoshop.png';
import illustrator from './Apply Page picture/graphic apply pictures/ai.png';
import maya from './Apply Page picture/graphic apply pictures/maya.png';
import figma from './Apply Page picture/graphic apply pictures/figma.png';
import Applypage from './Apply-page';
import Randomgreentextandfooter from './randomgreentextandfooter'; 

export default function Graphicapply() {
  return (
    <>
        <Applypage intern1 = {"Photoshop Internship"} intern2 = {"Illustrator Internship"} intern3 = {"AutoDesk Maya Internship"} intern4 = {"Figma Internship"} intern1Pic = {photoshop} intern2Pic = {illustrator} intern3Pic = {maya} intern4Pic = {figma}/>
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
        <img src={mobileApp} alt="MobileApp picture" />
        <h5 style={{margin:"20px"}}>MobileApp Development</h5>
        <hr style={{width:"22svw",marginLeft:'20px'}}/>
    <Link style={{textDecoration:"None"}}  to="/Mobile-App-Internship" >  <button class="button" style={{alignSelf:"end", marginRight:"20px", boxShadow:" 0px 0px 0px rgba(0, 0, 0, 0.2)"}}>
  Apply Now
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
      <div className="intern-containers">
        <img src={dataAnalysis} alt="Data Analysis picture" />
        <h5 style={{margin:"20px"}}>Data Analysis</h5>
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
        <img src={digital} alt="Backend picture" />
        <h5 style={{margin:"20px"}}>Digital Marketing</h5>
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
      <Randomgreentextandfooter/>
    
    </>
  )
}
