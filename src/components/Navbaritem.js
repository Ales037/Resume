import React from 'react';
import {Container,Navbar,Nav} from 'react-bootstrap';



const Navigation = ()=> {
    
    const mystyle = {
        
        display: 'flex',
        alignItems: 'center',
        margin: 'auto',
       
        
      };
    
      return(

                <div>
                <Navbar collapseOnSelect fixed='top' expand="sm" bg="dark" variant="dark">
                  <Container>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" style={mystyle}>
                      <Nav.Link  href="/home" >Home</Nav.Link>
                      <Nav.Link  href="/skills">Skills</Nav.Link>
                      <Nav.Link  href="/contact" >Contact</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                  </Container>
                </Navbar>
                </div>
      
    

    );
}

export default Navigation;