import React from 'react';
import frontend from '../Picture/FrontEnd.webp';
import flutter from '../Picture/flutter.webp';
import react from '../Picture/react.webp';
import dialogFlow from './Apply Page picture/Chatbot Apply pictures/Dialogflow.png';
import alexaSkills from './Apply Page picture/Chatbot Apply pictures/alexa.png';
import Rasa from './Apply Page picture/Chatbot Apply pictures/rasa.png';
import genAi from './Apply Page picture/Chatbot Apply pictures/chatbot.png';
import salesforce from './Apply Page picture/Chatbot Apply pictures/salesforce.png';
import maze from './Apply Page picture/icons8-maze-64.png';
import Applypage from './Apply-page';
import Randomgreentextandfooter from './randomgreentextandfooter';
import { Link } from 'react-router-dom';

export default function ChatbotApply() {
  return (
    <>
           <Applypage intern1 = {"DialogFlow Internship"} intern2 = {"Alexa Internship"} intern3 = {"RASA Internship"} intern4 = {"Generative Ai Internship"} intern1Pic = {dialogFlow} intern2Pic = {alexaSkills} intern3Pic = {Rasa} intern4Pic = {genAi}/>
           <div className='application-cont'>
          <div className='circular-img-cont'> <img src = {salesforce} alt= ""/> </div>
          <div className='application-data-cont'>
            <div>
              <h4><b>Salesforce CRM Internship</b></h4>
              <div>
              <p>
                <img src={maze} alt='maze'/> Karachi, Pakistan
              </p>
              <p><img src={maze} alt='maze'/> Two Months</p>
              <h6><b>Internship &nbsp; Remote</b></h6>
              </div>


            </div>
          </div>
          <div className='application-btn-cont'>
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
        <div className="heading-container">
      <div className="intern-heading-containers">
        <p><b>Internships every months</b> Introducing Internee.pk, the ultimate platform designed to turbocharge the IT sector in Pakistan! We recognize the immense potential of talented individuals in the country and aim to bridge the gap between them and the thriving IT industry. Internee.pk offers a comprehensive range of virtual internship opportunities exclusively in the IT field.
</p>
      </div>
      <div className="intern-heading-containers">
     <Link style={{textDecoration:"None"}} to="/" ><button class="button">
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
        <img src={flutter} alt="Graphic picture" />
        <h5 style={{margin:"20px"}}>Flutter Development</h5>
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
        <img src={react} alt="chatbot picture" />
        <h5 style={{margin:"20px"}}>React Internship</h5>
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
        <img src={frontend} alt="MobileApp picture" />
        <h5 style={{margin:"10px"}}>FrontEnd Internship</h5>
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
