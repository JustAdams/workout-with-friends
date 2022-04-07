import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Workout with Friends</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/settings">Settings</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
