import { Navbar, Nav } from 'react-bootstrap';
import "../css/NavigationB.css";


function NavigationBar() {
  return (
    <div>
      <div className="flexbox-container-navbar">
        <Navbar bg="transparent" expand="lg">
            <Nav className="mr-auto">
              <Nav.Link href="#home"className='caption'>Home</Nav.Link>
              <Nav.Link href="#about"className='caption'>About</Nav.Link>
              <Nav.Link href="#resume"className='caption'>Resume</Nav.Link>
              <Nav.Link href="#contact"className='caption'>Contact</Nav.Link>
            </Nav>
        </Navbar>
        <div className="navbox"></div>
      </div>
    </div>
  );
}

export default NavigationBar;