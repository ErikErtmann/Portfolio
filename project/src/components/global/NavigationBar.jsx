import { Navbar, Nav } from 'react-bootstrap';
import "../css/NavigationB.css";


function NavigationBar() {
  return (
    <div>
      <div className="flexbox-container-navbar">
        <Navbar bg="transparent" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home"className='caption'>Home</Nav.Link>
              <Nav.Link href="#about"className='caption'>About</Nav.Link>
              <Nav.Link href="#resume"className='caption'>Resume</Nav.Link>
              <Nav.Link href="#contact"className='caption'>Contact</Nav.Link>
              <Nav.Link href="#aboutenne"className='caption'>AboutEnne</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="navbox"></div>
      </div>
    </div>
  );
}

export default NavigationBar;