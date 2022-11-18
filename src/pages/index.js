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
            <Section className="section-hero">
                <div className="container">
                    {/* HERO */}
                    <section className="m-hero">
                        <div className="lft">
                            <h1>Complex design problems simplified</h1>
                            <h3>
                                I’m a full stack designer with a passion for big data, AI/ML and solving complex problems.
                            </h3>
                        </div>
                        <div className="rgt">
                            <SvgIllustration />
                        </div>
                    </section>
                </div>
            </Section>
            <Section className="section-bottom-xxl">
                <div className="container">
                    <div className="section-title">
                        <h1>Selected work</h1>
                        <h3>Here are a few examples of my recent work.</h3>
                    </div>

                    {/* CARD GRID */}
                    <section className="m-card-grid">
                        {/* ROW 1 */}
                        <div className="m-card-grid-row m-card-grid-2">
                            <a className="m-card" href="/1">
                                <img src={'/ownly.png'} alt="Ownly Sample Designs" />
                                <h3 class="h-bold">Build and Price Redesign</h3>
                                <h4>Ownly</h4>
                            </a>
                            <a className="m-card" href="/1">
                                <img src={'/ownly.png'} alt="Ownly Sample Designs" />
                                <h3 class="h-bold">Build and Price Redesign</h3>
                                <h4>Ownly</h4>
                            </a>
                        </div>

                        {/* ROW 2 */}
                        <div className="m-card-grid-row m-card-grid-2">
                        <a className="m-card" href="/1">
                                <img src={'/ownly.png'} alt="Ownly Sample Designs" />
                                <h3 class="h-bold">Build and Price Redesign</h3>
                                <h4>Ownly</h4>
                            </a>
                            <a className="m-card" href="/1">
                                <img src={'/ownly.png'} alt="Ownly Sample Designs" />
                                <h3 class="h-bold">Build and Price Redesign</h3>
                                <h4>Ownly</h4>
                            </a>
                        </div>
                    </section>
                </div>
            </Section>

            <Section className="section-secondary-color">
                <div class="container">
                    <h1>Greetings</h1>
                    <div className="section-2-col">
                        <div>
                            <h3>
                                In a former life I was a developer for many years until I was drawn to the design side of 
                                the house in 2014 by some amazing mentors at Macadamian.
                            </h3>
                            <h3>
                                Previously, I led the design efforts for a few startups including Ownly, a burgeoning prop tech, 
                                Solink, a leader in retail video surveillance and Fusebill, a fin tech concentrating on 
                                subscriptoin billing.
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