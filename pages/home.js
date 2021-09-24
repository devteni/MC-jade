import React from "react";
import Image from "next/image";
import { Service } from "../components/Service";
import { Footer } from "../components/Footer";
import pic from "../public/assets/img/design-build-home.jpg";
import { Container, Row, Col } from "react-bootstrap";
import { Attribution } from "../components/Attribution";
import Link from "next/link";

const services = [
    {
        "id": 1,
        "name": "Procurement", 
        "desc": "lorem ipsum lorem ipsum lorem ipsum"
    },
    {
        "id": 2,
        "name": "Consultancy", 
        "desc": "lorem ipsum lorem ipsum lorem ipsum"
    },
    {
        "id": 3,
        "name": "Contracts", 
        "desc": "lorem ipsum lorem ipsum lorem ipsum"
    },
    {
        "id": 4,
        "name": "Project execution", 
        "desc": "lorem ipsum lorem ipsum lorem ipsum"
    }
]

export const Index = () => {
    return(
        <div>
            <div className="hero" id="hero">
                <Container>
                    <Row>
                        <Col sm>
                            <h1 className="p-5 font-weight-bolder text-center herotext">THE JOB IS THE BOSS</h1>
                            <h3 className="text-muted mb-5">The Design-Build firm where Build Smart isnt just a tagline.</h3>
                            <a href="#" className="cta">View projects</a>
                        </Col>

                    </Row>
                    
                </Container>
            </div>

            <section id="part1">
                <Container className="pt-5">
                    <div className="row">
                        <Col sm style={{boxShadow:"5px 5px 5px gray"}}>
                            <h1 className="font-weight-bolder" style={{color: "rgba(255, 136, 0, 0.808);"}}>WE&apos;RE THE BEST AT WHAT WE DO
                            </h1>
                            <section>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptates, possimus ipsa quod amet maiores cum suscipit iure obcaecati veniam quis quae unde doloremque mollitia autem nulla nisi fugiat eveniet? Et inventore dolores necessitatibus alias corrupti ducimus quibusdam ipsam voluptatum, cum dignissimos reiciendis, impedit quia tempore sit tempora animi molestias provident nemo modi mollitia maxime! 
                            Voluptates, rem aspernatur. Iure fuga, cumque, perferendis mollitia ullam odit explicabo soluta quo 
                            molestias quibusdam magni sapiente in, exercitationem blanditiis iusto voluptas inventore debitis quidem 
                            ab assumenda? Ullam, eos animi? Natus facere libero, sunt vitae ipsam dolorum quae. Nobis error impedit rem 
                            perspiciatis quas dolore aperiam reiciendis. Esse, dolor labore nobis debitis in quam id corporis ratione 
                            </p>
                            <p className="pt-5"><a href="#" className="cta">Learn More</a></p>

                            </section>
                            
                        </Col>
                            <Col sm className="pt-2">
                                <Image src={pic} alt="display-img" layout="responsive" />
                            </Col>
                    </div>
                </Container>
            </section>

            <Attribution />

            <section id="part3">
                {/* <div className={styles.bigText}>the job is the boss</div> */}
                <Container fluid>
                    <h2 className="text-center text-white">Services</h2>
                    <Row className="justify-center-md-center">
                        {
                            services.map((service, i) => {
                                return (
                                <Col lg={3}>
                                    <Service 
                                        key={i}
                                        id={services[i].id}
                                        name={services[i].name}
                                        desc={services[i].desc}
                                    />
                                </Col>
                                )
                               })
                        } 
                    </Row>
                </Container>
            </section>
        
            <section id="part4">
                <section className="resource">
                    <Container className="resource-text">
                        <div>
                            <h2>Resources and guides</h2>
                            <p>We believe in getting you the answers you need. 
                                We manage a library of valuable resources including construction industry articles and downloadable white papers and guides you can use as you consider a partnership with The Korte Company. 
                            </p>
                            <span className="cta">View resources</span>
                        </div>
                        <div>
                            <h2>About MCjade</h2>
                            <p>
                                Founded in xxxx by a farmer’s son who once said he’d rather drive nails than eat, Mc Jade Company today is one of the country’s leading Design-Build construction firms. We’re as committed today to a job well done as Jane Doe was 20 years ago.
                            </p>
                            <span className="cta">
                                <Link href="/about">Learn more</Link>
                            </span>
                        </div>
                    </Container>
                    </section>
                
            </section>
        
            <Footer />
        </div>
    )
}