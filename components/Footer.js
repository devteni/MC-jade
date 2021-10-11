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
                {/* <div className="border border-bottom w-25 text-center"></div> */}
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
                <p className="p-3" style={{fontWeight: "bolder", fontSize: "20px"}}>BUILDING EMERGENCY?<br/> <small>CALL US 24/7 AT +23479838990</small></p>
                {/* social links */}
                {/* <div className="row">
                    <a><i className=""></i></a>
                </div> */}
                <div className="copyright">
                    <p style={{fontStyle: "italic"}}>&copy; 2021 MCjade constructions. All marks are trademarks of their respective owners</p>
                </div>
            </section> 
            </Container>  
        </footer>
    )
}