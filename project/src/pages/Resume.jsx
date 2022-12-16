import "../components/css/Resume.css";

function Resume() {
  return (
    <div className="ContainerResume">
  
      <div class="picofmeresume">
        <img className="picofme" src={require("../images/AboutMe.png")} alt=""/>
      </div>
  
      <div class="aboutmeresume">
        <h1>About Me</h1>
      </div>
      <div>
    <p>
        Hi I am Erik. I'm a blablablabla. 
    </p>
    
    <p>
        My main area of expertise is web dev and I have experience with 
        technologies such as JavaScript, React and Python.
    </p>
    
    <p>
      In my free time, I enjoy being with friends and family, traveling, and 
      learning new programming languages. I am also an avid reader and 
      enjoy reading books on a variety of topics.
    </p>
    
    <p>
      Thank you for visiting my portfolio. If you have any questions or would like 
      to work with me, please don't hesitate to CONTACT ME.
    </p>
    </div> 
    </div>);
  }

export default Resume;