import { Navbar, Container, Button, Offcanvas } from "react-bootstrap";
import { useAuth } from "@arcana/auth-react";
import Login from "./Login";

function Header() {
  const auth = useAuth();
  const handleLogout = async () => {
    auth.logout();
  };
  return (
    <>
      <Navbar bg="dark" expand={false} className="mb-3">
        <Container fluid>
          <Navbar.Brand href="/" className="text-white">
            Space Explorer
          </Navbar.Brand>
          <Navbar.Toggle as="div">
            <Button type="button" variant="danger">
              {auth?.isLoggedIn ? "Welcome" : "Sign In"}
            </Button>
          </Navbar.Toggle>
          <Navbar.Offcanvas placement="end" className="bg-dark">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                {auth?.isLoggedIn ? "Welcome" : "Sign In"}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {auth?.isLoggedIn ? (
                <Button type="button" variant="danger" onClick={handleLogout}>
                  Logout
                </Button>
              ) : (
                <Login />
              )}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
