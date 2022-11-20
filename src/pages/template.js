import React from "react"

import "../styles/styles.scss"

import Layout from "../template/layout/layout"
import Header from "../template/header/header.js"
import Footer from "../template/footer/footer.js"
import Section from "../template/section/section.js"

import SvgBack from "../assets/svgs/back";

// INDEX
const IndexPage = (props) => {
    return (
        <Layout>
            <Header/>
            {/* BACK */}
            <a className="m-back" href="/"><SvgBack /> Back to examples</a>

            {/* HERO + STATS */}
            <Section className="section-bottom-xxl">
                <div class="container">
                    {/* HERO */}
                    <div className="m-project-title">
                        <h1>Project Title</h1>
                        <h4>Company</h4>
                    </div>

                    {/* STATS */}
                    <div className="m-stats">
                        <div className="stat">
                            <div>Position</div>
                            <div>Lead UI/UX</div>
                        </div>
                        <div className="stat">
                            <div>Duration</div>
                            <div>2022 - 12 months</div>
                        </div>
                        <div className="stat">
                            <div>Platform</div>
                            <div>Mobile, Desktop, Tablet, Touchscreen</div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* MAIN FIGURE */}
            <Section className="section-bottom-xxl">
                <div class="container">
                    <figure className="m-figure">
                        <img src={'/ownly-detail-1.png'} alt="Ownly Sample Designs" />
                        <figcaption>Mobile High Fidelity Wireframes</figcaption>
                    </figure>
                </div>
            </Section>

            {/* OVERVIEW */}
            <Section className="section-secondary-color">
                <div class="container">
                    <h2>Overview</h2>
                    <p>
                        What is company project
                    </p>
                    <p>
                        Pain points (feedback, interviews)
                    </p>
                    <div className="m-highlight m-hightlight-invert">
                        Problem statement
                    </div>                    
                    <p>
                        Goals
                    </p>
                    <div className="m-highlight-grid m-highlight-last">
                        <div className="m-highlight-grid-row m-highlight-grid-3">
                            <div className="m-highlight m-hightlight-invert">Highlight 1</div> 
                            <div className="m-highlight m-hightlight-invert">Highlight 2</div> 
                            <div className="m-highlight m-hightlight-invert">Highlight 3</div> 
                        </div> 
                    </div>
                </div>
            </Section>

            {/* PROCESS */}
            <Section>
                <div class="container">
                    <h2>Process</h2>
                    <p>
                        Inital steps, learning
                    </p>
                    <figure className="m-figure">
                        <img src={'/ownly-detail-1.png'} alt="Ownly Sample Designs" />
                        <figcaption>Mapping</figcaption>
                    </figure>  
                    <p>
                        Going wide
                    </p>
                    <figure className="m-figure">
                        <img src={'/ownly-detail-1.png'} alt="Ownly Sample Designs" />
                        <figcaption>An early prototye</figcaption>
                    </figure>
                    <p>
                        The "ah ha", technical constraints, mid-stream changes
                    </p>                    
                    <figure className="m-figure">
                        <img src={'/ownly-detail-1.png'} alt="Ownly Sample Designs" />
                        <figcaption>New concept</figcaption>
                    </figure>
                </div>
            </Section>

            {/* SOLUTION */}
            <Section className="section-secondary-color">
                <div class="container">
                    <h2>Solution</h2>
                    <p>
                        Testing (A/B), results
                    </p>
                    <div className="m-highlight-grid">
                        <div className="m-highlight-grid-row m-highlight-grid-3">
                            <div className="m-highlight m-hightlight-invert">Highlight 1</div> 
                            <div className="m-highlight m-hightlight-invert">Highlight 2</div> 
                            <div className="m-highlight m-hightlight-invert">Highlight 3</div> 
                        </div> 
                    </div>
                    <p>
                        Lessions learned
                    </p>
                    <div className="m-highlight-grid">
                        <div className="m-highlight-grid-row m-highlight-grid-3">
                            <div className="m-highlight m-hightlight-invert">Highlight 1</div> 
                            <div className="m-highlight m-hightlight-invert">Highlight 2</div> 
                            <div className="m-highlight m-hightlight-invert">Highlight 3</div> 
                        </div> 
                    </div>
                    <figure className="m-figure">
                        <img src={'/ownly-detail-1.png'} alt="Ownly Sample Designs" />
                        <figcaption>Final design example</figcaption>
                    </figure>
                </div>
            </Section>
            <Footer />
        </Layout>
    );
}

export default IndexPage