import react from "react";
import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
import { Auth, useAuth } from "@arcana/auth-react";

function Header() {
  const auth = useAuth();
  const onLogin = () => {
    // Route to authenticated page
  };
  const handleLogout = async () => {
    auth.logout();
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Space Explorer</Navbar.Brand>
        <Navbar.Collapse>
          <Nav>
            {auth?.isLoggedIn && (
              <Button type="button" variant="danger" onClick={handleLogout}>
                Logout
              </Button>
            )}{" "}
            {!auth?.isLoggedIn && (
              <Dropdown>
                <Dropdown.Toggle variant="danger">Sign In</Dropdown.Toggle>
                // TODO Custom Login Dropdown
                <Dropdown.Menu>
                  {!auth?.isLoggedIn && (
                    <div style={{ position: "relative" }}>
                      <div
                        style={{
                          position: "absolute",
                          right: "70px",
                          top: "-10px",
                        }}
                      >
                        <Auth
                          theme={"dark"}
                          onLogin={onLogin}
                          externalWallet={false}
                        />
                      </div>
                    </div>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
