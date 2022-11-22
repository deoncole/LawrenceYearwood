import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import logo from '../assets/ly-logo.png'

function Home() {
    return (
      <>
      
        <Navbar expand='lg'>
            <Container>
                <Navbar.Brand href='#home' className='ml-auto'>
                    <img 
                        src={logo}
                        width='200'
                        height='200'
                        className='d-inline-block align-top'
                        alt='Lawrence Yearwood Logo'
                    />
                </Navbar.Brand>
                <Nav className='justify-content-end' activeKey='/home' 
                    onSelect=  {(selectedKey) => alert(`selected ${selectedKey}`)}>
                    <Nav.Item>
                        <Nav.Link eventKey='Pay-Here'>Pay Here</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey='Client-Portal'>Client Portal</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>          
        </Navbar>
        <Nav className='justify-content-center'>
          <NavDropdown title="Virtual CFO" id="basic-nav-dropdown">
            <NavDropdown.Item href='#action/1.1'>Financial Modeling</NavDropdown.Item>
            <NavDropdown.Item href='#action/1.2'>Financial Strategy</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Virtual Controllership" id="basic-nav-dropdown">
            <NavDropdown.Item href='#action/2.1'>Cash Management</NavDropdown.Item>
            <NavDropdown.Item href='#action/2.2'>FP&A</NavDropdown.Item>
            <NavDropdown.Item href='#action/2.3'>Financial Statements</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Accounting Outsourcing" id="basic-nav-dropdown">
            <NavDropdown.Item href='#action/3.1'>Month End</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>Reconciliations</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>No Assurance Financial Statements</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Web Development" id="basic-nav-dropdown">
            <NavDropdown.Item href='#action/4.1'>Coming Soon</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        </>
    );
}

export default Home;