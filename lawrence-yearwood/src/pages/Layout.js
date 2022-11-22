import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Outlet, Link} from 'react-router-dom'
import logo from '../assets/ly-logo.png'
import {MDBFooter, MDBContainer, MDBIcon, MDBBtn} from 'mdb-react-ui-kit'

function Layout () {
    return (
      <>
      
        <Navbar expand='lg'>
            <Container>
                <Navbar.Brand href='/' className='ml-auto'>
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

        {/* Start of mid nav section */}
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
          <NavDropdown title="Database Administration" id="basic-nav-dropdown">
            <NavDropdown.Item href='#action/4.1'>Coming Soon</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        {/* Spot to render the selected route */}
        <Outlet/>

        {/* Start of Footer */}
        <MDBFooter className='bg-dark text-center text-white'>
          <MDBContainer className='p-4 pb-0'>
            <section className='mb-4'>
              {/* Need to insert email address */}
              <MDBBtn outline color="light" floating className='m-1' href='mailto: yourname@email.com' role='button'>
                <MDBIcon far icon='envelope' />
              </MDBBtn>
              {/* Need to insert a telephone number */}
              <MDBBtn outline color="light" floating className='m-1' href='tel:1234567890' role='button'>
                <MDBIcon fas icon='phone' />
              </MDBBtn>
              {/* Need to insert a link to the linkedin page */}
              <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/' target="_blank" role='button'>
                <MDBIcon fab icon='linkedin' />
              </MDBBtn>
            </section>
          </MDBContainer>
          <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2022 Copyright Lawrence Yearwood, LLC
          </div>
        </MDBFooter>
      </>
    );
}

export default Layout;