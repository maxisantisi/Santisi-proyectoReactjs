import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidget from "../CardWidget";
import "./navbar.css" ;



function NavBar () {
    return (
        <div className="navbar">
            <Navbar expand="lg">
      <Container>
        <Navbar.Brand  href="#home"> <img className="logo" src="https://static-cse.canva.com/blob/954937/1600w-2YtEuuiE8U4.jpg" alt="" /></Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">

            <Nav.Link href="#home">Nike</Nav.Link>
            <Nav.Link href="#home">Adidas</Nav.Link>
            <Nav.Link href="#home">Puma</Nav.Link>
            
          </Nav>

          <CardWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
            
        </div>
    );


}







export default NavBar ;