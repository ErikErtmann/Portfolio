import "../components/css/Resume.css";
import { useState } from "react";

function Resume() {
  const [text, setText] = useState("Check out my CV and projects");

  const handleProjectsClick = () => {
    setText(
    <p>
      E-shop that I built during a course, feel free to register with non-correct information to gain access to admin panel.
       <a href="https://myrugs.web.app/" rel="noreferrer" target="_blank">Link</a>
      <br/><br/>
      E-shop I am currently building for a friend.    
       <a href="https://erikertmann.github.io/SokiPood/" rel="noreferrer" target="_blank">Link</a>
      <br/><br/>
      Non-deployed code on GitHub.
        <a href="https://github.com/ErikErtmann?tab=repositories" rel="noreferrer" target="_blank">Link</a>
    </p>
    );
  };

  const handleCVClick = () => {
    setText(
      <p>
        You can check out my CV (in Estonian) 
        <a href="https://cv.ee/api/v1/files-service/20058341-bda7-4028-a07c-fcd18737fc50?isPreview=true" rel="noreferrer" target="_blank"> here.</a>
        .
      </p>);
  };

  return (
  <div className="ContainerResume">
    <div className="resumerow">
      <div className="resumecol">
        <h1 className="resumetitle">Resume
        </h1>
        <div className="box1resume"></div> 
      </div>
      
      <div className="resumecol2">
        <div className="resumemore">
          <h3 className="resumemorelinks" onClick={handleProjectsClick}>
            Projects</h3>

          <h3 className="resumemorelinks" onClick={handleCVClick}>
            My CV</h3>
        </div>
      </div>  
      <div className="resumecol3">
        <div className="resumeparag">
            <p>
              {text}
            </p>
        </div>
      </div>    
    </div>
  </div>);
}

export default Resume;