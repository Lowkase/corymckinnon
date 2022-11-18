import React from "react"

import "../styles/styles.scss"

import Layout from "../template/layout/layout"
import Header from "../template/header/header.js"
import Footer from "../template/footer/footer.js"
import Section from "../template/section/section.js"

// INDEX
const IndexPage = (props) => {
    return (
        <Layout>
            <Header/>
            <Section>
                {/* HERO */}
                <section className="m-hero">
                    <h1>I’m a full stack designer with a passion for big data, AI/ML and solving complex problems</h1>
                    <h4>Here are a few examples of my recent work</h4>
                </section>
            </Section>
            <Section className="section-bottom-xxl">
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
            </Section>
            <Footer />
        </Layout>
    );
}

export default IndexPage