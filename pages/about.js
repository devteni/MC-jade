import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from "../public/assets/img/korte-img.png";
import Image from "next/image"
import { NavBar } from "../components/Navbar";
import { Attribution } from "../components/Attribution";
import { Footer } from "../components/Footer";

const About = () => {
    return(
        <div>
            <NavBar />
            <div className="hero" id="hero">
                <Container>
                    <Row>
                        <Col sm>
                            <h1 className="p-5 font-weight-bold text-center herotext">ABOUT MCJADE COMPANY</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="company-culture">
                <Container>
                    <Row>
                        <Col className="p-4">
                            <h1 className="" style={{fontSize: '20px'}}>Company Culture in Construction</h1>
                            <p style={{fontSize:"15px"}} className="text-left">What to expect during the course of construction</p>
                        </Col>
                        
                        <Col lg={3} className="p-4">
                            <p><span className="cta p-3" style={{padding: '16px', position: 'relative', top: '-30%'}}> Download guide </span></p>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
            <section id="part1">
                <Container className="pt-5">
                    <div className="row">
                        <Col sm>
                            <section>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptates, possimus ipsa quod amet maiores cum suscipit iure obcaecati veniam quis quae unde doloremque mollitia autem nulla nisi fugiat eveniet? Et inventore dolores necessitatibus alias corrupti ducimus quibusdam ipsam voluptatum, cum dignissimos reiciendis, impedit quia tempore sit tempora animi molestias provident nemo modi mollitia maxime! 
                                Voluptates, rem aspernatur. Iure fuga, cumque, perferendis mollitia ullam odit explicabo soluta quo 
                                molestias quibusdam magni sapiente in, exercitationem blanditiis iusto voluptas inventore debitis quidem 
                                ab assumenda? Ullam, eos animi? Natus facere libero, sunt vitae ipsam dolorum quae. Nobis error impedit rem 
                                perspiciatis quas dolore aperiam reiciendis. Esse, dolor labore nobis debitis in quam id corporis ratione 
                                </p>
                                <Row className="pt-5 text-center">
                                    <Col style={{display: 'flex', flexWrap: 'wrap'}}>
                                        <span ><a href="#" className="cta m-2">Company Timeline</a></span>
                                        <span><a href="#" className="cta m-2">Prospectus</a></span>
                                    </Col>   
                                </Row>

                            </section>
                            
                        </Col>
                            <Col sm className="pt-2">
                                <Image src={pic} alt="display-img" layout="fixed" />
                            </Col>
                    </div>
                </Container>
            </section>
            <Attribution />
            <Footer />
        </div>
    )
}

export default About;