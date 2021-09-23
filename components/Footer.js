import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const addresses = [
    {
        "id": 1,
        "state":"St louis",
        "street": "5700 Oakland Avenue",
        "phone": "314-231-3700"
    },
    {
        "id": 2,
        "state":"Highland",
        "street": "12441 US highway 40",
        "phone": "314-231-3700"
    },
    {
        "id": 3,
        "state":"Highland",
        "street": "12441 US highway 40",
        "phone": "314-231-3700"
    },
    {
        "id": 4,
        "state":"Highland",
        "street": "12441 US highway 40",
        "phone": "314-231-3700"
    },
]

export const Footer = () => {
    return(
        <footer id="footer">
                <Container fluid="sm">
                <h2 className="text-center">Offices</h2>
                    <Row>
                    {
                        addresses.map((address, i) => {
                            return(
                                <Col>
                                    <div className="address">
                                        <address>
                                            <b>{addresses[i].state}</b>
                                            <br />
                                            {addresses[i].street}
                                            <br />
                                            {addresses[i].phone}
                                        </address>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>

            <section className="text-center">
                <p className="p-3 font-weight-light">BUILDING EMERGENCY? CALL US 24/7 AT +23479838990</p>
                {/* social links */}
                {/* <div className="row">
                    <a><i className=""></i></a>
                </div> */}
                <div className="copyright">
                    <p>&copy; 2021 MCjade constructions. All marks are trademarks of their respective owners</p>
                </div>
            </section> 
            </Container>  
        </footer>
    )
}