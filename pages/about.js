import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from "../public/assets/img/design-build-home.jpg";
import Image from "next/image"
import { NavBar } from "../components/Navbar";
import { Attribution } from "../components/Attribution";

const About = () => {
    return(
        <div>
            <NavBar />
            <div className="hero" id="hero">
                <Container>
                    <Row>
                        <Col sm>
                            <h1 className="p-5 font-weight-bolder text-center herotext">ABOUT MCJADE COMPANY</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="company-culture">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="">Company Culture in Construction</h1>
                            <p style={{fontSize:"20px"}}>What to expect during the course of construction</p>
                        </Col>
                        
                        <Col lg={3} className="p-3">
                            <span className="cta p-3" > Download guide</span>
                        </Col>
                    </Row>
                </Container>
            </div>
            <section id="part1">
                <Container className="pt-5">
                    <div className="row">
                        <Col sm>
                            <h1 className="font-weight-bolder" style={{color: "rgba(255, 136, 0, 0.808)"}}>WE&apos;RE THE BEST AT WHAT WE DO
                            </h1>
                            <section>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptates, possimus ipsa quod amet maiores cum suscipit iure obcaecati veniam quis quae unde doloremque mollitia autem nulla nisi fugiat eveniet? Et inventore dolores necessitatibus alias corrupti ducimus quibusdam ipsam voluptatum, cum dignissimos reiciendis, impedit quia tempore sit tempora animi molestias provident nemo modi mollitia maxime! 
                                Voluptates, rem aspernatur. Iure fuga, cumque, perferendis mollitia ullam odit explicabo soluta quo 
                                molestias quibusdam magni sapiente in, exercitationem blanditiis iusto voluptas inventore debitis quidem 
                                ab assumenda? Ullam, eos animi? Natus facere libero, sunt vitae ipsam dolorum quae. Nobis error impedit rem 
                                perspiciatis quas dolore aperiam reiciendis. Esse, dolor labore nobis debitis in quam id corporis ratione 
                                </p>
                                <Row className="pt-5">
                                    <span className="pt-5"><a href="#" className="cta">Company Timeline</a></span>
                                    <span className="pt-5"><a href="#" className="cta">Company Timeline</a></span>
                                </Row>

                            </section>
                            
                        </Col>
                            <Col sm className="pt-2">
                                <Image src={pic} alt="display-img" layout="responsive" />
                            </Col>
                    </div>
                </Container>
            </section>

            <Attribution />

        </div>
    )
}

export default About;