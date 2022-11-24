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
            <a className="m-back" href="/"><SvgBack /> Back to recent work</a>

            {/* HERO + STATS */}
            <Section>
                <div className="container">
                    {/* TITLE */}
                    <div className="m-project-title">
                        <h1>Event Search</h1>
                        <h3>Solink</h3>
                    </div>

                    {/* STATS */}
                    <div className="m-stats">
                        <div className="stat">
                            <div>Position</div>
                            <div>Lead UI/UX</div>
                        </div>
                        <div className="stat">
                            <div>Duration</div>
                            <div>2020 - 4 months</div>
                        </div>
                        <div className="stat">
                            <div>Platform</div>
                            <div>Mobile, Desktop, Tablet</div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* MAIN FIGURE */}
            <Section>
                <div className="container">
                    <figure className="m-figure">
                        <img src={'/solink-2.jpg'} alt="High fidelity design for the search events feature" />
                        <figcaption>High fidelity wireframe</figcaption>
                    </figure>
                </div>
            </Section>

            {/* OVERVIEW */}
            <Section className="section-secondary">
                <div className="container">
                    <h2>Overview</h2>
                    <p>
                        Solink's surveillance solution pairs Point of Sale (Pos) transactions with corresponding real-time video in the cloud to 
                        create a dashboard of searchable moments. Users search these moments to find movement in a room, specific purchases and 
                        unusual employee behaviour. Solink has disrupted the video surveillance space, becoming the hub for business operations, 
                        security and loss prevention. Solink services restaurant, retail and financial sectors.
                    </p>
                    <p>
                        Each customer in the Solink ecosystem collects different types of video content and PoS data. Disparate data structures
                        across customers create a search and reporting problem at scale.
                    </p>                    
                    <p>
                        For example, customer A wants to extract the number of times an employee used a staff discount to determine if the 
                        employee is abusing their discount privilege. Customer B wants to track the sale of a particular product over a 
                        month to measure the success of a marketing campaign. Customer C wants to count how often secured rooms are accessed 
                        using video motion data.
                    </p>
                    <p>
                        We repeatedly received feedback from customer success, sales and directly from customers that the search mechanisms 
                        were too simple and rigid. To find specific events, customers selected a report and filtered it by adding one or 
                        two search terms. Customers wanted greater freedom in searching their data to extract company insights.
                    </p>
                    <div className="m-highlight m-hightlight-invert">
                        How can Solink improve the searchability of events?
                    </div>
                    <p>
                    Our primary focus was to improve the search experience. Our secondary goal was to ensure users could save their 
                    searches as a report.
                    </p> 
                    <div className="m-highlight-grid m-highlight-last">
                        <div className="m-highlight-grid-row m-highlight-grid-3">
                            <div className="m-highlight m-hightlight-invert">Improve engagement on the events page</div> 
                            <div className="m-highlight m-hightlight-invert">Get customers to self-manage report creation</div> 
                        </div> 
                    </div>
                </div>
            </Section>

            {/* PROCESS */}
            <Section>
                <div className="container">
                    <h2>Process</h2>
                    <p>
                        First, we identified three customers that had different business models. We chose one customer each from the restaurant, 
                        retail and financial sectors. We wanted to analyze each customer's PoS and video data to find commonalities and patterns.
                    </p>
                    <p>
                        We found that the data attributes with the strongest correlations were; date range, location and transaction type. 
                        We assumed that adding these three data points to the search section would immediately improve 
                        the search experience.
                    </p>
                    <p>
                        We created a clickable mockup based on our assumptions and approached each test customer to gather their feedback
                    </p>
                    <figure className="m-figure">
                        <img src={'/solink-3.jpg'} alt="Early prototype" />
                        <figcaption>Concept mockup of new search section</figcaption>
                    </figure>
                    <p>
                        The customers loved the addition of the three inputs. It simplified and sped up the input of those values, but it 
                        fell short of the freedom customers expected from the search experience.
                    </p>
                    <p>
                        We needed to go wider with our design thinking, so we sought out examples from similar online systems that support 
                        big data at scale. We found a promising candidate while exploring the Intercom app. Intercom combines simple 
                        object-based search inputs with complicated SQL-like concepts into one experience.
                    </p>
                    <figure className="m-figure">
                        <img src={'/solink-4.gif'} style={{border: '1px solid #2b2c34'}} alt="Intercom inspiration" />
                        <figcaption>Intercom inspiration</figcaption>
                    </figure>    
                    <p>
                        We wanted to test the Intercom pattern on our Events page, but first, we spent some time iterating a design. 
                        We did many rounds of design and feedback from engineering to ensure we did not exceed any technical constraints. 
                        At intervals, we reached out for feedback internally and from our select customers. We had to make some tweaks along 
                        the way, but there were no derailments. Finally, it was time to move to development.
                    </p>
                    <figure className="m-figure">
                        <img src={'/solink-5.jpg'} alt="Supporting modals and interactions" />
                        <figcaption>Supporting modals and interactions</figcaption>
                    </figure>
                </div>
            </Section>

            {/* SOLUTION */}
            <Section className="section-secondary">
                <div className="container">
                    <h2>Solution</h2>
                    <p>
                        While the interfaces and interactions for the final design were somewhat simple, the systems engineering to pull off the 
                        experience was technically challenging. We needed to step into the complexity of the feature over many sprints. We set up
                        recurring touchpoints with engineering to plan sprints and bridge the gap between design and development.
                    </p>
                    <p>
                        We were able to start pulling metrics from the new search experience as features went live. The most striking stat 
                        was engagement. Users were spending, on average, 11% more time on the Events page. Users showed increased activity in creating reports 
                        from their custom searches and assigning them to the Dashboard. Users even included custom search results in 
                        their weekly digests.
                    </p>
                    <p>
                        Our customer success staff reported positive experiences as they use the Events page frequently to perform duties on 
                        behalf of our customers. Sales looped back with us to report many positive customer experiences with the improved search 
                        experience.
                    </p>                                        
                    <div className="m-highlight-grid">
                        <div className="m-highlight-grid-row m-highlight-grid-3">
                            <div className="m-highlight m-hightlight-invert">11% increased engagement on the Events page.</div> 
                            <div className="m-highlight m-hightlight-invert">7% report creation increase.</div>
                            <div className="m-highlight m-hightlight-invert">4% weekly digest creation increase.</div>
                            <div className="m-highlight m-hightlight-invert">Positive feedback from customer success and sales teams.</div> 
                        </div> 
                    </div>
                    <p></p>
                    <h2>Takeaways</h2>
                    <p></p>
                    <div className="m-highlight m-hightlight-invert">
                        Listen to customer success and sales insights intently. These teams had many more touchpoints with the customer 
                        than the product team and were instrumental in landing the feature with our customers.
                    </div>  
                    <div className="m-highlight m-hightlight-invert">
                        Implementing technically complex features in one continuous effort is challenging. It is best to derisk features by 
                        stepping into complexity over many sprints. It allows engineering to chip away at big problems while continuing to 
                        push featurs to production.
                    </div>  
                </div>
            </Section>
            <Footer />
        </Layout>
    );
}

export default IndexPage