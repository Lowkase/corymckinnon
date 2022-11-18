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
                        <h1>Build and Price Redesign</h1>
                        <h4>Ownly</h4>
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
                        <img src={'/ownly.png'} alt="Ownly Sample Designs" />
                        <figcaption>Mobile High Fidelity Wireframes</figcaption>
                    </figure>
                </div>
            </Section>

            {/* OVERVIEW */}
            <Section className="section-secondary-color">
                <div class="container">
                    <h2>Overview</h2>
                    <p>Lorem ipsum dolor sit amet. Et sunt praesentium rem excepturi odit a voluptas minima sit consequuntur perspiciatis eos amet quaerat! Est numquam aliquid qui facere omnis At enim quia non veritatis deserunt cum repellat totam id voluptatibus facilis.asdf  kalsfj a;lskjfal;skfja;ls kdfja;lskdf ja;lsdkaskldfj a;lskdfja; slkdfja;sl kdfja;lskd fja;lskdfjasdklfja; sldkfja;sl dkfja;slkd fjas;lkdfja;sldkf</p>
                    <p>Lorem ipsum dolor sit amet. Et sunt praesentium rem excepturi odit a voluptas minima sit consequuntur perspiciatis eos amet quaerat! Est numquam aliquid qui facere omnis At enim quia non veritatis deserunt cum repellat totam id voluptatibus facilis.asdf  kalsfj a;lskjfal;skfja;ls kdfja;lskdf ja;lsdkaskldfj a;lskdfja; slkdfja;sl kdfja;lskd fja;lskdfjasdklfja; sldkfja;sl dkfja;slkd fjas;lkdfja;sldkf</p>
                    <div className="m-highlight m-hightlight-invert">
                        Highlight
                    </div>
                    <p>Lorem ipsum dolor sit amet. Et sunt praesentium rem excepturi odit a voluptas minima sit consequuntur perspiciatis eos amet quaerat! Est numquam aliquid qui facere omnis At enim quia non veritatis deserunt cum repellat totam id voluptatibus facilis.asdf  kalsfj a;lskjfal;skfja;ls kdfja;lskdf ja;lsdkaskldfj a;lskdfja; slkdfja;sl kdfja;lskd fja;lskdfjasdklfja; sldkfja;sl dkfja;slkd fjas;lkdfja;sldkf</p>
                    <div className="m-highlight-grid">
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
                    <p>Lorem ipsum dolor sit amet. Et sunt praesentium rem excepturi odit a voluptas minima sit consequuntur perspiciatis eos amet quaerat! Est numquam aliquid qui facere omnis At enim quia non veritatis deserunt cum repellat totam id voluptatibus facilis.asdf  kalsfj a;lskjfal;skfja;ls kdfja;lskdf ja;lsdkaskldfj a;lskdfja; slkdfja;sl kdfja;lskd fja;lskdfjasdklfja; sldkfja;sl dkfja;slkd fjas;lkdfja;sldkf</p>
                    <p>Lorem ipsum dolor sit amet. Et sunt praesentium rem excepturi odit a voluptas minima sit consequuntur perspiciatis eos amet quaerat! Est numquam aliquid qui facere omnis At enim quia non veritatis deserunt cum repellat totam id voluptatibus facilis.asdf  kalsfj a;lskjfal;skfja;ls kdfja;lskdf ja;lsdkaskldfj a;lskdfja; slkdfja;sl kdfja;lskd fja;lskdfjasdklfja; sldkfja;sl dkfja;slkd fjas;lkdfja;sldkf</p>
                    <div className="m-highlight">
                        Highlight
                    </div>
                    <p>Lorem ipsum dolor sit amet. Et sunt praesentium rem excepturi odit a voluptas minima sit consequuntur perspiciatis eos amet quaerat! Est numquam aliquid qui facere omnis At enim quia non veritatis deserunt cum repellat totam id voluptatibus facilis.asdf  kalsfj a;lskjfal;skfja;ls kdfja;lskdf ja;lsdkaskldfj a;lskdfja; slkdfja;sl kdfja;lskd fja;lskdfjasdklfja; sldkfja;sl dkfja;slkd fjas;lkdfja;sldkf</p>
                    <div className="m-highlight-grid">
                        <div className="m-highlight-grid-row m-highlight-grid-3">
                            <div className="m-highlight">Highlight 1</div> 
                            <div className="m-highlight">Highlight 2</div> 
                            <div className="m-highlight">Highlight 3</div> 
                        </div> 
                    </div>
                </div>
            </Section>

            {/* SOLUTION */}
            <Section className="section-secondary-color">
                <div class="container">
                    <h2>Solution</h2>
                    <p>Lorem ipsum dolor sit amet. Et sunt praesentium rem excepturi odit a voluptas minima sit consequuntur perspiciatis eos amet quaerat! Est numquam aliquid qui facere omnis At enim quia non veritatis deserunt cum repellat totam id voluptatibus facilis.asdf  kalsfj a;lskjfal;skfja;ls kdfja;lskdf ja;lsdkaskldfj a;lskdfja; slkdfja;sl kdfja;lskd fja;lskdfjasdklfja; sldkfja;sl dkfja;slkd fjas;lkdfja;sldkf</p>
                    <p>Lorem ipsum dolor sit amet. Et sunt praesentium rem excepturi odit a voluptas minima sit consequuntur perspiciatis eos amet quaerat! Est numquam aliquid qui facere omnis At enim quia non veritatis deserunt cum repellat totam id voluptatibus facilis.asdf  kalsfj a;lskjfal;skfja;ls kdfja;lskdf ja;lsdkaskldfj a;lskdfja; slkdfja;sl kdfja;lskd fja;lskdfjasdklfja; sldkfja;sl dkfja;slkd fjas;lkdfja;sldkf</p>
                    <div className="m-highlight m-hightlight-invert">
                        Highlight
                    </div>
                    <p>Lorem ipsum dolor sit amet. Et sunt praesentium rem excepturi odit a voluptas minima sit consequuntur perspiciatis eos amet quaerat! Est numquam aliquid qui facere omnis At enim quia non veritatis deserunt cum repellat totam id voluptatibus facilis.asdf  kalsfj a;lskjfal;skfja;ls kdfja;lskdf ja;lsdkaskldfj a;lskdfja; slkdfja;sl kdfja;lskd fja;lskdfjasdklfja; sldkfja;sl dkfja;slkd fjas;lkdfja;sldkf</p>
                    <div className="m-highlight-grid">
                        <div className="m-highlight-grid-row m-highlight-grid-3">
                            <div className="m-highlight m-hightlight-invert">Highlight 1</div> 
                            <div className="m-highlight m-hightlight-invert">Highlight 2</div> 
                            <div className="m-highlight m-hightlight-invert">Highlight 3</div> 
                        </div> 
                    </div>
                </div>
            </Section>
            <Footer />
        </Layout>
    );
}

export default IndexPage