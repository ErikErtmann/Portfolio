import { useState } from "react";
import '../components/css/About.css';


function AboutEnne() {
  const [introText, setIntroText] = useState(
    "Hi! My name is Erik and I am a self-taught programmer with a passion for creating beautiful and functional websites."
  );

  const handleClick = (e, text) => {
    setIntroText(text);
  };

  return (
    <div className="ContainerAboutMe">
      <div className="aboutmerow">
        <div className="aboutcol">
          <h1 className="title">About Me</h1>
          <div className="box1"></div> 
        </div>
        <div className="aboutcol2">
            <div className="aboutmore">
                <button onClick={(e) => handleClick(e, "This is the introduction text.")} className="aboutmorelinks">
                Introduction
                </button>
                <button onClick={(e) => handleClick(e, "These are the courses I have taken.")} className="aboutmorelinks">
                Courses
                </button>
                <button onClick={(e) => handleClick(e, "This is my education.")} className="aboutmorelinks">
                Education
                </button>
        </div>

        </div>
        <div>
          <div>
            <p>{introText}</p>
          </div>
        </div>    
      </div>
    </div>
  );
}

export default AboutEnne;
