import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import { NavBar } from '../components/Navbar';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Footer } from '../components/Footer';

export default function contact() {
    const [status, setStatus] = useState("Sending");
    return (
        <div>
            <NavBar />
            <div className="contact" id="hero">
                <Container>
                    <Row>
                        <Col sm>
                            <h1 className="p-5 font-weight-bolder text-center herotext">MAKE YOUR ENQUIRIES</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="form">
               <Container className="text-white">
                   <Row>
                    <Col lg={6}>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name*</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address*</Form.Label>
                                <Form.Control type="email" placeholder="email@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message*</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <button className="cta px-4 py-2">Send</button>
                        </Form>
                        </Col>
                        <Col className="mx-5">
                            <h1 className="p-4">Want to discuss your next project?</h1>
                            <span class="cta">Contact Sales team</span>
                        </Col>
                    </Row>
            </Container>
                   
                
            </div>
            
            <Footer />
        </div>
    )
}
