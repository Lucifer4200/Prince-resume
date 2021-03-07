import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as ReactBootstrap from 'react-bootstrap'
import Container from 'react-bootstrap/Container'

const Navbar = () => {
    return (
        <ReactBootstrap.Navbar bg="success" expand="lg">
            <Container fluid>
                <ReactBootstrap.Navbar.Brand href="#home" className='text-white'>React-Bootstrap</ReactBootstrap.Navbar.Brand>
                <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
                <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
                    <ReactBootstrap.Nav className="ml-auto">
                        <ReactBootstrap.Nav.Link className='text-white' href="#home">Home</ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link className='text-white' href="#About">About</ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link className='text-white' href="#Protfolio">Protfolio</ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link className='text-white' href="#Blog">Blog</ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link className='text-white' href="#Contact">Contact</ReactBootstrap.Nav.Link>
                    </ReactBootstrap.Nav>
                </ReactBootstrap.Navbar.Collapse>
            </Container>
        </ReactBootstrap.Navbar>
    )
}

export default Navbar
