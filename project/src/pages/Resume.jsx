import "../components/css/Resume.css";

function Resume() {
  return (
    <div className="ContainerResume">
      
      <div class="aboutmeresume">
        <h1>Resume</h1>
      </div>

      <div class="picofmeresume">
        <img className="picofmeresume" src={require("../images/AboutMe.png")} alt=""/>
      </div>
  
      <div className="resumestuff">
        <p>
            Download my resume here: LINK
        </p>
      </div> 
    </div>);
  }

export default Resume;