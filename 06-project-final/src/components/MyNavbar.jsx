import React, { useState } from 'react'
import { Container, Navbar, Nav, OverlayTrigger, Button, Tooltip } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import ProductSidebar from './ProductSidebar'
import '../styles/my-navbar.css'

const MyNavbar = () => {
    // use
    const navigate = useNavigate()
    const [show, setShow] = useState(false)

    // functions
    const logout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <Navbar bg='primary' variant='dark' sticky='top' expand='md' className='navbar'>
                <Container>
                    <Navbar.Brand to={'/'} as={Link}>
                        <i className='fa-solid fa-dumpster-fire'>
                            {'  '}
                            <span> Ecommerce</span>
                        </i>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav' className='colapse'>
                        <Nav className='justify-content-end'>
                            <OverlayTrigger
                                placement='bottom'
                                delay={{ show: 250, hide: 400 }}
                                overlay={<Tooltip id='button-tooltip'>Home</Tooltip>}
                            >
                                <Nav.Link to={'/'} as={Link}>
                                    <i className='fa-solid fa-house'></i>
                                </Nav.Link>
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement='bottom'
                                delay={{ show: 250, hide: 400 }}
                                overlay={<Tooltip id='button-tooltip'>Collections</Tooltip>}
                            >
                                <Nav.Link to={'/purchases'} as={Link}>
                                    <i className='fa-solid fa-box-archive'></i>
                                </Nav.Link>
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement='bottom'
                                delay={{ show: 250, hide: 400 }}
                                overlay={<Tooltip id='button-tooltip'>Cart</Tooltip>}
                            >
                                <Nav.Link onClick={handleShow}>
                                    <i className='fa-solid fa-cart-shopping'></i>
                                </Nav.Link>
                            </OverlayTrigger>
                            {localStorage.getItem('token') ? (
                                <OverlayTrigger
                                    placement='bottom'
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={<Tooltip id='button-tooltip'>Logout</Tooltip>}
                                >
                                    <Nav.Link onClick={logout}>
                                        <i className='fa-solid fa-right-from-bracket'></i>
                                    </Nav.Link>
                                </OverlayTrigger>
                            ) : (
                                <OverlayTrigger
                                    placement='bottom'
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={<Tooltip id='button-tooltip'>Login</Tooltip>}
                                >
                                    <Nav.Link to={'/login'} as={Link}>
                                        <i className='fa-solid fa-right-to-bracket'></i>
                                    </Nav.Link>
                                </OverlayTrigger>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ProductSidebar show={show} handleClose={handleClose} />
        </>
    )
}

export default MyNavbar
