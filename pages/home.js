import React from "react";
import styles from '../styles/Home.module.css';
import Image from "next/image";
import { Service } from "../components/Service";

const services = [
    {
        "id": 1,
        "name": "Procurement", 
        "desc": "lorem ipsum lorem ipsum lorem ipsum"
    },
    {
        "id": 2,
        "name": "Consultancy services", 
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
            <div className={styles.hero} id="hero">
                <div className="container">
                    <h1 className={styles.herotext}>THE JOB IS THE BOSS</h1>
                    <h3 className="text-muted mb-5">The Design-Build firm where Build Smart isnt just a tagline.</h3>
                    <a href="#" className={styles.cta}>View projects</a>
                </div>
            </div>

            <section id={styles.part1}>
                <div className="container">
                    <div className="row">
                        <div className="col" style={{boxShadow:"5px 5px 5px gray"}}>
                            <h1 className="text-white font-weight-bolder" style={{fontSize: ""}}>WE&apos;RE THE BEST AT WHAT WE DO
                            </h1>
                            <article>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptates, possimus ipsa quod amet maiores cum suscipit iure obcaecati veniam quis quae unde doloremque mollitia autem nulla nisi fugiat eveniet? Et inventore dolores necessitatibus alias corrupti ducimus quibusdam ipsam voluptatum, cum dignissimos reiciendis, impedit quia tempore sit tempora animi molestias provident nemo modi mollitia maxime! 
                            Voluptates, rem aspernatur. Iure fuga, cumque, perferendis mollitia ullam odit explicabo soluta quo 
                            molestias quibusdam magni sapiente in, exercitationem blanditiis iusto voluptas inventore debitis quidem 
                            ab assumenda? Ullam, eos animi? Natus facere libero, sunt vitae ipsam dolorum quae. Nobis error impedit rem 
                            perspiciatis quas dolore aperiam reiciendis. Esse, dolor labore nobis debitis in quam id corporis ratione 
                            minima dolore aspernatur officia fugit assumenda voluptas repellat odio fugiat aliquid facilis a! Soluta, 
                            eaque minima. Omnis rerum quam maxime minima adipisci voluptatem sapiente ad modi tempore, soluta dolorum 
                            corrupti vel iste, eius molestiae maiores eaque eos sed provident. Repellendus rem exercitationem sit tenetur d
                            istinctio doloremque veritatis quisquam animi sunt aliquid asperiores inventore non nihil illo ullam nulla, vo
                            <a href=""></a>

                            </article>
                        </div>
                        <div className="col">
                            <Image src="/../background.png" alt="display-img" layout="fill"/>
                        </div>
                    </div>
                </div>
            </section>

            <section id={styles.part2}>
                <div className="container">
                    <div className="row">
                        <div className="col"><h1 className={styles.part2text}>We&apos;ve built for the best</h1></div>
                        <div className="col-lg-4">
                            <div className="row">
                                <div className={styles.box}></div>
                                <div className={styles.box}></div>
                                <div className={styles.box}></div>
                                <div className={styles.box}></div>
                                <div className={styles.box}></div>
                            </div>
                            
                        </div>
                   </div>
                   <a href="#" className={styles.cta}>See more</a>
                </div>
            </section>
        
            <section id={styles.part3}>
                {/* <div className={styles.bigText}>the job is the boss</div> */}
                <div className="container pt-5">
                    <h2 className="text-center">Services</h2>
                    <div className="row">
                        {
                            services.map((service, i) => {
                                return (<Service 
                                    key={i}
                                    id={services[i].id}
                                    name={services[i].name}
                                    desc={services[i].desc}
                                 />)
                               })
                        } 
                    </div>

                </div>
            </section>
        </div>
    )
}