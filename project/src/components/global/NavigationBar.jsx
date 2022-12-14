/* eslint-disable no-unused-vars */
import { Navbar, Nav } from 'react-bootstrap';
// the code is actually using it
import styles from "../css/NavigationB.css";

function NavigationBar() {
  return (
    <div className="flexbox-container-navbar">
    <Navbar bg="transparent" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href=".."className='caption'>Home</Nav.Link>
          <Nav.Link href=".."className='caption'>About</Nav.Link>
          <Nav.Link href=".."className='caption'>Resume</Nav.Link>
          <Nav.Link href=".."className='caption'>Contact Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default NavigationBar;