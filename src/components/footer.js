import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaStackOverflow } from 'react-icons/fa'
import { AiOutlineMail } from "react-icons/ai";



function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="bottom">
      <Container className="justify-content-center">

          <Nav>
            <Nav.Link href="https://www.linkedin.com/in/qi-chen-fullstack/"><FaLinkedin />LinkedIn</Nav.Link>
            <Nav.Link href="https://github.com/ricky8221"><FaGithub />GitHub</Nav.Link>
            <Nav.Link href="https://stackoverflow.com/users/20227148/ricky-chen"><FaStackOverflow />Stack Overflow</Nav.Link>
            <Nav.Link href="mailto:rickychen.fullstack@gmail.com"><AiOutlineMail/>Email</Nav.Link>
          </Nav>

      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;