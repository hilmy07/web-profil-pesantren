import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from './../assets/logo.png';

const Navigation = () => {
  return (
    <Navbar bg='dark' variant='dark' expand="lg">
      <Container className='justify-content-between'>
        <Navbar.Brand href="#"><img src={logo} style={{ width: '130px', height: 'auto' }} />Darul Musthafa</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav
            style={{ maxHeight: '70px' }}
            navbarScroll>
            <Nav.Link href="#berita">Berita</Nav.Link>
            <Nav.Link href="#kegiatan">Kegiatan</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
