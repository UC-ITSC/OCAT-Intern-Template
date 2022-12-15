import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

export const Navigation = () =>
  <header>
    <Navbar expand="md" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">OCAT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Dashboard</Nav.Link>
            <Nav.Link href="/assessment/new">New Assessment</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>;
