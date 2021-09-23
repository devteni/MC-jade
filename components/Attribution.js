import React from "react";
import { Container, Col, Row } from "react-bootstrap";

export const Attribution = () => {
    return(
        <div>
            <section id="part2">
                <Container>
                    <Row>
                        <Col lg={3}><h1 className="part2text">We&apos;ve built for the best</h1></Col>
                        <Col className="mx-5">
                            <Col sm>
                                <Row className="justify-center mx-3 px-5">
                                    <div style={{display: "flex", flexWrap: "wrap"}}>
                                    <div className="box"></div>
                                    <div className="box"></div>
                                    <div className="box"></div>
                                    <div className="box"></div>
                                    <div className="box"></div>
                                    <div className="box"></div>
                                    <div className="box"></div>
                                    <div className="box"></div> 
                                    </div>
                                </Row>
                            </Col>
                        </Col>
                    </Row>
                   <a href="#" className="cta">See more</a>
                </Container>
            </section>

        </div>
    )
}