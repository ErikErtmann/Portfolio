import '../components/css/About.css';
import { useState } from 'react';

function About() {


  return (
  <div className="ContainerAboutMe">
    <div className="aboutmerow">
      <div className="aboutcol">
        <h1 className="title">About Me</h1>
        <div className="box1"></div> 
      </div>
      <div className="aboutcol2">
        <div className="aboutmore">
          <h3 className="aboutmorelinks">Introduction</h3>
          <h3 className="aboutmorelinks">Courses</h3>
          <h3 className="aboutmorelinks" >Education</h3>
        </div>
      </div>  
      <div className="aboutcol3">
        <div className="parag">
            <p>
              I have been learning to code for almost a year now, and I have gained 
              experience in a number of programming languages, including CSS, Python, 
              JavaScript, and React. I am always looking to expand my skillset and 
              take on new challenges, and I believe that my dedication and hard work 
              have helped me to become a proficient and reliable developer.<br/>
              In my free time, I enjoy being with friends and family, traveling, and 
              staying up-to-date with the latest trends and techniques in web 
              development, I am constantly learning and experimenting with new
              technologies. I am also an avid reader, and I love to spend my time 
              exploring new books and ideas.<br/>
              I am excited to share my work with you, and I hope that my portfolio gives
              you a sense of my abilities and style as a developer. Thank you for taking 
              the time to visit my website, and please don't hesitate to contact me if you 
              have any questions or if you would like to work together.
            </p>
        </div>
      </div>    
    </div>
  </div>);
}

export default About;

          // <h3 className="aboutmorelinks" onclick="opentab('introduction')">Introduction</h3>
          // <h3 className="aboutmorelinks" onclick="opentab('courses')">Courses</h3>
          // <h3 className="aboutmorelinks" onclick="opentab('education')">Education</h3>