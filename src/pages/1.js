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
            <Section className="section-bottom-xxl">
                <div class="container">
                    {/* HERO */}
                    <div className="m-project-title">
                        <h1>Build and Price Redesign</h1>
                        <h3>Ownly</h3>
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
                        <img src={'/ownly-2.jpg'} alt="High fidelity designs for mobile" />
                        <figcaption>High fidelity wireframes</figcaption>
                    </figure>
                </div>
            </Section>

            {/* OVERVIEW */}
            <Section className="section-secondary-color">
                <div class="container">
                    <h2>Overview</h2>
                    <p>
                        Ownly&#39;s goal is to disrupt the new home buying experience by moving in person sales interactions 
                        and transactions online. An important piece to the online home buying ecosystem is the Build and Price
                        experience which allows users to find the type of new home they want and to do some customizations before
                        saving it to their My Homes profile.
                    </p>
                    <p>
                        The first version of Build and Price had poor conversions of a key metric called Save. Users must Sign Up for 
                        an Ownly account before their Build and Price information can be saved to a My Homes profile.
                        When we studied user experiences on Hotjar we saw them getting frusturated when navigating, some users even
                        got lost and dropped off very early. We also observed hesitation when clicking some action buttons due to confusing
                        language what was industry specific to new home builders. Most users where dropping out of the experience before
                        converting and saving their Build and Price.
                    </p>                    
                    <p>
                        When we interviewed Ownly&#39;s customers they expressed frustration by the quality and fidelity of the interface 
                        and requested features that had already been identified on the product roadmap.
                    </p>
                    <div className="m-highlight m-hightlight-invert">
                        How can we redesign the Build and Price experience to increase save conversions?
                    </div>                     
                    <p>
                        We brought the entire team together, helped them to empathize with user and customer pain points, then we
                        defined our goals for the next version of Build and Price:
                    </p>
                    <div className="m-highlight-grid m-highlight-last">
                        <div className="m-highlight-grid-row m-highlight-grid-3">
                            <div className="m-highlight m-hightlight-invert">Increase conversions by 20%</div> 
                            <div className="m-highlight m-hightlight-invert">Simplify navigation</div> 
                            <div className="m-highlight m-hightlight-invert">Improve fidelity of look and feel</div>
                            <div className="m-highlight m-hightlight-invert">Normalize language</div> 
                        </div> 
                    </div>
                </div>
            </Section>

            {/* PROCESS */}
            <Section>
                <div class="container">
                    <h2>Process</h2>
                    <p>
                        We didn&#39;t have a clear picture of all the features, flows and rules associated with the current Build and 
                        Price. We took a bit of time and mapped the system and created an initial source of truth that the entire 
                        time could reference as a baseline.
                    </p>
                    <p>
                        We were intent on studying real-life experiences with Build and Price so we started watching many Hotjar 
                        sessions. It quickly became apparent that users were spending most of their time finding a new home type 
                        and then exploring customization options. We needed to concentrate on these two experiences in order to 
                        produce to meet our design goals.
                    </p>
                    <p>
                        After meeting with a few of our builder customers we were able to prioritize two new features in the 
                        road map for the next version of Build and Price. With the help of engineering we agreed that better 
                        filtering for new home types and an improved lot selection experience had low technical constraints and 
                        had a high probability of being built in a tight time frame.
                    </p>
                    <p>
                        It was time to go wide with ideation and simple design exercises. We wanted to use early mockups to start validating 
                        ideas and to get feedback from the team, our customers and the users.
                    </p>
                    <figure className="m-figure">
                        <img src={'/ownly-3.jpg'} alt="Early prototypes" />
                        <figcaption>Early prototypes prototye</figcaption>
                    </figure>
                    <p>
                        After many iterations we were onto something good, the language was improving, the new features were slotting
                        in but the navigation and layouts of some steps wasn&#39;t simple, we were still getting confused, it was too busy.
                    </p>
                    <div className="m-highlight">
                        It quickly become apparent that car manufacturer Build and Price navigation was the key to a better 
                        experience for our customers.
                    </div>  
                    <p>
                        We needed to step back and do a bit more research on how the Build and Price steps were sequenced and laid out.
                        We looked at other manufacturers of "big ticket" and landed on how the car manufacturing
                        sector approached Build and Price. We parsed through many car Build and Price experiences and found 
                        commonalities that could be applied to the Ownly solution.
                    </p>
                    <p>
                        After a couple rounds of testing it quickly became apparent that the new navigation and layout approach was making
                        sense, users were not getting lost and were moving forward and backward through the flow with ease.
                    </p>
                    <figure className="m-figure">
                        <img src={'/ownly-4.jpg'} alt="New concept" />
                        <figcaption>New concept</figcaption>
                    </figure>
                </div>
            </Section>

            {/* SOLUTION */}
            <Section className="section-secondary-color">
                <div class="container">
                    <h2>Solution</h2>
                    <p>
                        We continued to iterate on the new concepts and testing them until we finalized the design. Handoff included
                        acceptance criteria and a few rounds of meetings with engineering to ensure everyone was on the same page before
                        committing to the development sprints.
                    </p>
                    <p>
                        We released the new flows to production and conducted an A/B test of conversion rates between the new and old 
                        designs. The results were concrete, the conversion rates had increased by 25%. The vast majority of the users 
                        were not getting confused or lost in the flow and were using the new features with ease. Engagement of the 
                        customization portion of the solution had increased by 35%.
                    </p>
                    <div className="m-highlight-grid">
                        <div className="m-highlight-grid-row m-highlight-grid-3">
                            <div className="m-highlight m-hightlight-invert">Conversion rates increased by 25%</div> 
                            <div className="m-highlight m-hightlight-invert">Customization engagement increased by 35%</div> 
                        </div> 
                    </div>
                    <p></p>
                    <h2>Takeaways</h2>
                    <p></p>
                    <div className="m-highlight m-hightlight-invert">
                        Small seeded startups don’t have time to document when pushing out initial features. Mapping out the Build 
                        and Price flow, documenting the rules and features and producing a baseline proved to be invaluable for the 
                        remainder of the project.
                    </div>  
                    <div className="m-highlight m-hightlight-invert">
                        Seeking out other “big ticket” purchase examples really helped us to land on navigation and layout approaches 
                        which helped us to overcome the confusion of initial Build and Price experience.
                    </div>  
                    <div className="m-highlight m-hightlight-invert">
                        Testing ideas early and frequently meant we didn&#39;t fall down many design rabbit holes.
                    </div>  
                </div>
            </Section>
            <Footer />
        </Layout>
    );
}

export default IndexPage