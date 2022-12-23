import { useState } from 'react';
import '../components/css/About.css';

function About() {
  const [text, setText] = useState("Hi! My name is Erik and I am a self-taught programmer with a passion for creating beautiful and functional websites.");

  const handleIntroductionClick = () => {
    setText(
    <p>
      I have been learning to code for almost a year now, and I have gained 
      experience in a number of programming languages, including CSS, Python, 
      JavaScript, and React. I am always looking to expand my skillset and 
      take on new challenges, and I believe that my dedication and hard work 
      have helped me to become a proficient and reliable developer.<br/><br/>
      In my free time, I enjoy staying up-to-date with the latest trends and 
      techniques in web development, I am constantly learning and experimenting 
      with new technologies.<br/><br/>
      I am excited to share my work with you, and I hope that my portfolio gives
      you a sense of my abilities and style as a developer. Thank you for taking 
      the time to visit my website, and please don't hesitate to contact me if you 
      have any questions or if you would like to work together.
    </p>
    );
  };

  const handleCoursesClick = () => {
    setText(
    <p>
      "JavaScript & React: nullist front-end spetsialistiks intensiivõpe"<br/> by Aurora development <br/><br/>
      "Tehnoloogia tarbijast loojaks"<br/>by Tartu Ülikooli arvutiteaduse instituudi täiendusõppeprogramm, exam result 83.75% <br/><br/>
      "Python"<br/>by Teamtreehouse <br/><br/>
      "Tartu Ülikooli matemaatika ja statistika instituudi täiendusõpe"<br/>by Tartu Ülikool <br/>
    </p>);
  };

  const handleEducationClick = () => {
    setText(
      <p>
        Tartu Kristjan Jaak Petersoni Gümnaasium 09/2016-06/2019
      </p>);
  };

  return (
  <div className="ContainerAboutMe">
    <div className="aboutmerow">
      <div className="aboutcol">
        <h1 className="title">About Me 
        </h1>
        <div className="box1"></div> 
      </div>
      
      <div className="aboutcol2">
        <div className="aboutmore">
          <h3 className="aboutmorelinks" onClick={handleIntroductionClick}>
            Introduction</h3>
          <h3 className="aboutmorelinks" onClick={handleCoursesClick}>
            Courses</h3>
          <h3 className="aboutmorelinks" onClick={handleEducationClick}>
            Education</h3>
        </div>
      </div>  
      <div className="aboutcol3">
        <div className="parag">
            <p>
              {text}
            </p>
        </div>
      </div>    
    </div>
  </div>);
}

export default About;
// mul oleks vaja et ta on 1. rida name: lünk
                      //   2. rida email: lünk
                      //   3. rida message: lünk
// meanwhile on kõik columnis

/* <div className='ContactRow'>
<label className='parag' htmlFor="name">Name:</label>
<input type="text" id="name" ref={nameRef} />
</div>
<div className='ContactRow'>
<label className='parag' htmlFor="email">Email:</label>
<input type="email" id="email" ref={emailRef} />
</div>
<div classname='ContactRow'>
<label className='parag' htmlFor="message">Message:</label>
<textarea id="message" ref={messageRef} />
</div> */