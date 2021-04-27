import React from 'react'
import {Navbar,Container,Nav, Button} from 'react-bootstrap';
import '../Components/Css/style.css'

const Header = (props) => {
  return(
     
    <div className="navs">
         <Container>
        <Navbar  collapseOnSelect expand="lg"  variant="dark">
  <Navbar.Brand href="#home"><img className="logo mt-3" src="./image/logo.png"  alt=".."/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav  className="ml-5">
      <Nav.Link  href="#features">Hébergements

      </Nav.Link>
      <Nav.Link  href="#pricing">Expériences</Nav.Link>
      <Nav.Link  href="#pricing">Expériences en ligne</Nav.Link></Nav>
    
    <Nav className="ml-auto">
    <Nav.Link  href="#deets">Devenez hôte</Nav.Link>
      <Nav.Link >Dank memes</Nav.Link>
    </Nav>
  </Navbar.Collapse>
 
</Navbar>
<div className="title pb-5">
<h1>En <br/> pleine nature</h1>
<p>Favoris sélectionnés par Airbnb.</p>
<Button className="btn btn-inspire">Trouver l'inspiration</Button>
</div>
</Container>
    </div>
   
   )

 }

export default Header