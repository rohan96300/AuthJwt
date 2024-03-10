import {Navbar, Nav, Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
  return (
    <>
    <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
            <Navbar.Brand>
                Sample BrandName
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='navbar-nav'/>
            <Navbar.Collapse id='navbar-nav'>
                <Nav className='ms-auto'>
                    
                    <Nav.Link>Item1</Nav.Link>
                    
                    <Nav.Link>Item2</Nav.Link>
                    <Nav.Link>Item3</Nav.Link>
                    <LinkContainer to='/signin'>
                    <Nav.Link>Sign-in</Nav.Link>
                    </LinkContainer>
                    
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
  )
}

export default Header