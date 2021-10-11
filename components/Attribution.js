import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Image from 'next/image'
import Corps from "../public/assets/img/US-Army.png";
import USCorps from "../public/assets/img/US-Army-Corps-of-Engineers.png";
import USPS from "../public/assets/img/USPS.png";
import Walgreens from "../public/assets/img/Walgreens.png";


export const Attribution = () => {
    return(
        <div>
            <section id="part2">
                <Container>
                    <Row>
                        <Col lg={3}><h1 className="part2text">We&apos;ve built for the best</h1></Col>
                        <Col className="mx-5">
                            <Col sm>
                                <Row className="justify-center mx-lg-3 px-lg-5">
                                    <div style={{display: "flex", flexWrap: "wrap"}}>
                                    <div className="box" data-aos="zoom-in"><Image src={Corps}/></div>
                                    <div className="box" data-aos="zoom-in"><Image src={USCorps}/></div>
                                    <div className="box" data-aos="zoom-in"><Image src={Walgreens}/></div>
                                    <div className="box" data-aos="zoom-in"><Image src={USPS}/></div>
                                    <div className="box"></div>
                                    <div className="box"></div>
                                    <div className="box"></div>
                                    <div className="box"></div> 
                                    </div>
                                </Row>
                                <Row>
                                    <a href="#" className="cta text-center">See more</a>
                                </Row>
                            </Col>
                        </Col>
                    </Row>
                    
                </Container>
            </section>

        </div>
    )
}