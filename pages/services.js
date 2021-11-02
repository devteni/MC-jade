import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../components/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import { Footer } from "../components/Footer";
// import ParticlesBg from "particles-bg";

export default function Service(){
    return(
        <div>
            <NavBar/>
            <div className="hero" id="hero">
                <Container>
                    <Row>
                        <Col sm>
                            <h1 className="p-5 font-weight-bolder text-center herotext">HOW WE CAN SERVE YOU</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="services">
                <Container>
                    <Container className="pt-5">
                    <Row>
                        <Col>
                            <div className="service" data-aos="fade-right">
                                <h4>Procurement</h4>
                                <p>lorem10

                                </p>
                            </div>
                        </Col>
                        <Col>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptates, possimus ipsa quod amet maiores cum suscipit iure obcaecati veniam quis quae unde doloremque mollitia autem nulla nisi fugiat eveniet? Et inventore dolores necessitatibus alias corrupti ducimus quibusdam ipsam voluptatum, cum dignissimos reiciendis, impedit quia tempore sit tempora animi molestias provident nemo modi mollitia maxime! 
                            Voluptates, rem aspernatur. Iure fuga, cumque, perferendis mollitia ullam odit explicabo soluta quo 
                            molestias quibusdam magni sapiente in, exercitat
                        </Col>
                    </Row>
                </Container>
                <hr />
                <Container className="pt-5">
                    <Row>
                        <Col>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptates, possimus ipsa quod amet maiores cum suscipit iure obcaecati veniam quis quae unde doloremque mollitia autem nulla nisi fugiat eveniet? Et inventore dolores necessitatibus alias corrupti ducimus quibusdam ipsam voluptatum, cum dignissimos reiciendis, impedit quia tempore sit tempora animi molestias provident nemo modi mollitia maxime! 
                            Voluptates, rem aspernatur. Iure fuga, cumque, perferendis mollitia ullam odit explicabo soluta quo 
                            molestias quibusdam magni sapiente in, exercitat
                        </Col>
                        <Col className="">
                            <div className="service" data-aos="fade-left">
                                <h4>Project execution</h4>
                                <p>lorem10

                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <hr />
                <Container className="pt-5">
                    <Row>
                        <Col>
                            <div className="service" data-aos="zoom-in">
                                <h4>Consultancy services</h4>
                                <p>lorem10

                                </p>
                            </div>
                        </Col>
                        <Col>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptates, possimus ipsa quod amet maiores cum suscipit iure obcaecati veniam quis quae unde doloremque mollitia autem nulla nisi fugiat eveniet? Et inventore dolores necessitatibus alias corrupti ducimus quibusdam ipsam voluptatum, cum dignissimos reiciendis, impedit quia tempore sit tempora animi molestias provident nemo modi mollitia maxime! 
                            Voluptates, rem aspernatur. Iure fuga, cumque, perferendis mollitia ullam odit explicabo soluta quo 
                            molestias quibusdam magni sapiente in, exercitat
                        </Col>
                    </Row>
                </Container>
                <hr />
                <Container className="pt-5">
                    <Row>
                        <Col className="text-white" data-aos="fade-left" data-aos-delay="700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptates, possimus ipsa quod amet maiores cum suscipit iure obcaecati veniam quis quae unde doloremque mollitia autem nulla nisi fugiat eveniet? Et inventore dolores necessitatibus alias corrupti ducimus quibusdam ipsam voluptatum, cum dignissimos reiciendis, impedit quia tempore sit tempora animi molestias provident nemo modi mollitia maxime! 
                            Voluptates, rem aspernatur. Iure fuga, cumque, perferendis mollitia ullam odit explicabo soluta quo 
                            molestias quibusdam magni sapiente in, exercitat
                        </Col>
                        <Col className="">
                            <div className="service" data-aos="zoom-out">
                                <h4>Contracts</h4>
                                <p>lorem10
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                
                </Container>
            </div>
            <Footer />
        </div>
    )
}