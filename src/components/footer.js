import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaStackOverflow } from 'react-icons/fa'



function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="bottom">
      <Container className="justify-content-center">

          <Nav>
            <Nav.Link href="#deets"><FaLinkedin />LinkedIn</Nav.Link>
            <Nav.Link href="#deets"><FaGithub />GitHub</Nav.Link>
            <Nav.Link href="#deets"><FaStackOverflow />Stack Overflow</Nav.Link>
          </Nav>

      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;