import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import About from './about';

function Navigation(props) {
    const tabs = ["About", "Portfolio", "Contact", "Resume"];
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#about"
                onClick={() => props.handlePageChange(About)}
                className={
                  props.currentPage === About ? "nav-link active" : "nav-link"
                }
                ><h1>Ricky Chen</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                    {tabs.map((tab) => (
          <li
            className={
              props.currentPage === tab ? "nav-item is-active" : "nav-item"
            }
            key={tab}
          >
            <Nav.Link
              href={"#" + tab.toLowerCase()}
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? "nav-link active" : "nav-link"
              }
            >
              {tab}
            </Nav.Link>
          </li>
        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;