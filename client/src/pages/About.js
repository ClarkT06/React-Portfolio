import React, { Component } from "react";
import { Link } from "react-router-dom";
import profilePic from "./profile.jpg"

class About extends Component {
  render() {
    return (
    <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About</h2>
          <p>I am a Software Developer with 5 years of SaaS sales experience with multiple startups in the Seattle area. I've worked with companies ranging from sub 50 employees to Enterprise level engagements through my career. My primary focus now is to combine my new software skills with prior business acumen to pursue Business Analytics and Strategy / Sales Engineering and Software Development. </p>
        </div>

        <div className="row">
<div className="col">
   <img src={profilePic} className="rounded mx-auto d-block"/>
   </div>
          <div className="col">
            <h3>UI/UX Designer &amp; Web Developer.</h3>
            <p className="fst-italic">
          Below are some contact details and a little about me.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
               
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Seatle, WA</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <a href="https://www.linkedin.com/in/clarktoombs/" target="_blank">Linked In</a></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>pcmtoombs@gmail.com</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelors of Science</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Concentration</strong> <span>Busienss Management</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Bootcamp</strong> <span>University of Washington</span></li>
                </ul>
              </div>
            </div>
         <p>
             Contact me for more Info!
         </p>
          </div>
        </div>

      </div>
    </section>



        );
    }
}
export default About;