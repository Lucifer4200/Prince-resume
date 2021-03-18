import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import imgAbout from '../images/about/01.jpg'

function About() {
    return (
        <>
            <Container>
                <div className="section-wrapper pb-0">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <div className="aboutThumb">
                                <img src={ imgAbout } className='w-100' alt="about-img"/>
                            </div>
                        </div>
                        <div className="col-md-8 col-12 pl-lg-5">
                            <div className="aboutContent">
                                <div className="aboutTitle">
                                    <h3>About Me!</h3>
                                </div>
                                <div className="aboutDes">
                                    <p>Hello! I’m David. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                                <div className="adList">
                                    <ul className="list-item p-0 m-0 list-unstyled">
                                        <li className='mb-lg-2'><strong>Name: </strong>Prince</li>
                                        <li className='mb-lg-2'><strong>Freelance: </strong> Available</li>
                                        <li className='mb-lg-2'><strong>Date of birth: </strong>02-01-1996</li>
                                        <li className='mb-lg-2'><strong>Email: </strong>prince@website.com</li>
                                        <li className='mb-lg-2'><strong>Phone: </strong>(123)-456-7890</li>
                                        <li className='mb-lg-2'><strong>Address: </strong>Front Street, Mexico. Us</li>
                                        <li className='mb-lg-2'><strong>Nationality: </strong>United States</li>
                                        <li className='mb-lg-2'><strong>Gender: </strong>Male</li>
                                        <li className='mb-lg-2'><strong>Marital Status: </strong>Lives in</li>
                                        <li className=''><strong>Work Status: </strong>Web Designer</li>
                                    </ul>
                                </div>
                                <div className="aboutButton mt-3">
                                    <Button variant="success" className='mr-3'>Resume</Button>
                                    <Button variant="outline-success">Hire Me</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default About
