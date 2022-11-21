import React from "react"

import "../styles/styles.scss"

import Layout from "../template/layout/layout"
import Header from "../template/header/header.js"
import Footer from "../template/footer/footer.js"
import Section from "../template/section/section.js"

import SvgIllustration from "../assets/svgs/illustration.js"

// INDEX
const IndexPage = (props) => {
    return (
        <Layout>
            <Header/>
            <Section>
                <div className="container">
                    {/* HERO */}
                    <section className="m-hero">
                        <div className="lft">
                            <h1>Complex design problems simplified</h1>
                            <h3>
                                I&#39;m a Designer with a passion for complex systems, big data, AI/ML and solving problems.
                            </h3>
                        </div>
                        <div className="rgt">
                            <SvgIllustration />
                        </div>
                    </section>
                </div>
            </Section>
            <Section>
                <div className="container">
                    <div className="m-card-title">
                        <h1>Selected work</h1>
                        <h3>Here are a few examples of my recent work.</h3>
                    </div>

                    {/* CARD GRID */}
                    <section className="m-card-grid">
                        {/* ROW 1 */}
                        <div className="m-card-grid-row m-card-grid-2">
                            <a className="m-card" href="/1">
                                <img src={'/ownly-1.png'} alt="Ownly Sample Designs" />
                                <h3 className="h-bold">Build and Price Redesign</h3>
                                <h4>Ownly</h4>
                            </a>
                            <a className="m-card" href="/2">
                                <img src={'/twitter-1.jpg'} alt="High fidelity design of Twitter Spam Violation Workbenchs" />
                                <h3 className="h-bold">Twitter Spam Violation Workbench</h3>
                                <h4>Innodata</h4>
                            </a>
                        </div>

                        {/* ROW 2 
                        <div className="m-card-grid-row m-card-grid-2">
                        <a className="m-card" href="/3">
                                <img src={'/ownly.png'} alt="Ownly Sample Designs" />
                                <h3 className="h-bold">Build and Price Redesign</h3>
                                <h4>Ownly</h4>
                            </a>
                            <a className="m-card" href="/4">
                                <img src={'/ownly.png'} alt="Ownly Sample Designs" />
                                <h3 clasclassNames="h-bold">Build and Price Redesign</h3>
                                <h4>Ownly</h4>
                            </a>
                        </div>
                        */}
                    </section>
                </div>
            </Section>

            <Section className="section-secondary">
                <div className="container">
                    <h1>Greetings</h1>
                    <div className="section-2-col">
                        <div>
                            <h3>
                                In my former life, I was a developer for many years until I was drawn to the design side of the house 
                                in 2014 by some amazing mentors at <a href="https://www.macadamian.com/" target="_blank" rel="noreferrer">Macadamian</a>.
                            </h3>
                            <h3>
                                Previously, I led the design efforts for <a href="https://theownly.io/" target="_blank" rel="noreferrer">Ownly</a>, a burgeoning prop tech, <a href="https://https://innodata.com//" target="_blank" rel="noreferrer">Innodata</a>, a leader in ML/AI, <a href="https://solink.com/" target="_blank" rel="noreferrer">Solink</a>, advanced video surveillance for small businesses and <a href="https://fusebill.com/" target="_blank" rel="noreferrer">Fusebill</a>, a fintech concentrating on subscription billing.
                            </h3>
                            <h3>
                                Throughout my career, I have concentrated on tackling complex problems, empowering others to build and design through collaboration, failing early 
                                and often, sharing lessons learned and mentoring those that are eager to explore.
                            </h3>
                        </div>
                        <div>
                            <img src={'/cory.jpg'} alt="Cory Mckinnon" />
                        </div>
                    </div>
                </div>
            </Section>

            <Footer />
        </Layout>
    );
}

export default IndexPage