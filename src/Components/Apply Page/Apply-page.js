import React from 'react';
import Navbar from '../Navbar';
import "./Apply-page.css";
import maze from './Apply Page picture/icons8-maze-64.png';

export default function Applypage(props) {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
       <h1 className='main-page-heading'>Featured Internships</h1>
       <p className='main-page-subheading'>Grab your <b>Internships</b> on your favourite domain now..!</p>
       <div className='apply-m-cont'>
        <div className='application-cont'>
          <div className='circular-img-cont'> <img src = {props.intern1Pic} alt= ""/> </div>
          <div className='application-data-cont'>
            <div>
              <h4><b>{props.intern1}</b></h4>
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
        <div className='application-cont'>
          <div className='circular-img-cont'> <img src = {props.intern2Pic} alt = "Intern-Picture"/>

          </div>
          <div className='application-data-cont'>
            <div>
              <h4><b>{props.intern2}</b></h4>
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
        <div className='application-cont'>
          <div className='circular-img-cont'> <img src = {props.intern3Pic} alt = "Intern-Picture"/></div>
          <div className='application-data-cont'>
            <div>
              <h4><b>{props.intern3}</b></h4>
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
        <div className='application-cont'>
          <div className='circular-img-cont'> <img src = {props.intern4Pic} alt = "Intern-Picture"/></div>
          <div className='application-data-cont'>
            <div>
              <h4><b>{props.intern4}</b></h4>
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
       </div>
  
      </main>
    
    </>
  )
}
