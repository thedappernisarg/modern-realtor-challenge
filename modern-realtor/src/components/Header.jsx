import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { RiLogoutCircleRLine } from "react-icons/ri";

const Header = ({ user, setUser }) => {
  return (
    <>
      <Navbar
        variant="dark"
        fixed="top"
        style={{
          width: "100%",
          height: "70px",
          backgroundColor: "#545c81",
          color: "#fff",
          padding: "0px",
        }}
      >
        <Container>
          <Navbar.Brand style={{ width: "80%" }}>
            <h2 style={{ fontSize: "30px" }}>Modern Realtor</h2>
          </Navbar.Brand>
          <>
            <Nav className="me-auto" style={{ color: "white" }}>
              <LinkContainer to="/form">
                <Nav.Link>Form</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/dashboard">
                <Nav.Link>Dashboard</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/market-analysis">
                <Nav.Link>Analysis</Nav.Link>
              </LinkContainer>
            </Nav>
            <Navbar.Collapse className="justify-content-end mx-4">
              <RiLogoutCircleRLine size={20} cursor="pointer" />
            </Navbar.Collapse>
          </>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
