import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export const Navigation = () =>
  <header>
    <Navbar expand="md" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="/">OCAT</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Dashboard</Nav.Link>
        <Nav.Link href="/assessment/new">New Assessment</Nav.Link>
      </Nav>
    </Navbar>
  </header>;
