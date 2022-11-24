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
            <Section>
                <div className="container">
                    <figure className="m-figure">
                        <img src={'/ownly-2.jpg'} alt="High fidelity designs for mobile" />
                        <figcaption>High fidelity wireframes</figcaption>
                    </figure>
                </div>
            </Section>

            {/* OVERVIEW */}
            <Section className="section-secondary">
                <div className="container">
                    <h2>Overview</h2>
                    <p>
                        Ownly's goal is to disrupt the new home-buying experience by moving in-person sales interactions and 
                        transactions online. An important piece of the online home-buying ecosystem is the Build and Price experience 
                        which allows users to find the type of new home they are searching for and to perform customizations before saving their 
                        choices to a My Homes profile.
                    </p>
                    <p>
                        The first version of Build and Price had poor conversions of a key metric called Save. Users must sign up for an 
                        Ownly account before their Build and Price information can be saved to a My Homes profile. When we studied user 
                        experiences on Hotjar we observed them getting frustrated when navigating, with some users getting lost and dropping off
                        early. We also observed hesitation when clicking some action buttons due to the use of confusing industry specific language.
                        Ultiately, most users were dropping out of the experience before converting and saving their Build and Price.
                    </p>                    
                    <p>
                        When we interviewed Ownly's customers they expressed frustration with the quality and fidelity of the interface and 
                        requested features that had already been identified on the product roadmap.
                    </p>
                    <div className="m-highlight m-hightlight-invert">
                        How can we redesign the Build and Price experience to increase save conversions?
                    </div>                     
                    <p>
                        We brought the entire team together and facilitated exercises to help them empathize with the user and customer pain points.
                        Finally, we defined our goals for the next version of Build and Price:
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
                <div className="container">
                    <h2>Process</h2>
                    <p>
                        We didn't have a clear picture of all the features, flows and rules associated with the current Build and Price so we 
                        took a bit of time to map out the system and created an initial source of truth that the entire team could reference as a baseline.
                    </p>
                    <p>
                        We were intent on studying real-life experiences with Build and Price so we studied and observed many Hotjar sessions. It quickly 
                        became apparent that users were spending most of their time finding a new home type and then exploring customization options. 
                        We needed to concentrate on these two experiences to meet our design goals.
                    </p>
                    <p>
                        After meeting with a few of our builder customers we were able to prioritize two new features in the roadmap for the next 
                        version of Build and Price. With the help of engineering, we agreed that better filtering for new home types and an improved 
                        lot selection experience had low technical constraints and a high probability of being built in a tight time frame.
                    </p>
                    <p>
                        It was time to go wide with ideation and simple design exercises. We wanted to use early mock-ups to start validating ideas 
                        and get feedback from the team, our customers and the users.
                    </p>
                    <figure className="m-figure">
                        <img src={'/ownly-3.jpg'} alt="Early prototypes" />
                        <figcaption>Early prototyes</figcaption>
                    </figure>
                    <p>
                        After many iterations we were onto something good, the language was improving, and the new features were slotting in but 
                        the navigation and layouts of some steps weren't simple, we were still getting confused, and it was too busy.
                    </p>
                    <div className="m-highlight">
                        It quickly became apparent that car manufacturer Build and Price navigation was the key to a better experience for our customers.
                    </div>  
                    <p>
                        We needed to step back and do a bit more research on how the Build and Price steps were sequenced and laid out. We looked 
                        at other manufacturers of "big ticket" purchases and landed on how the car manufacturing sector approached Build and Price. 
                        We parsed through many car Build and Price experiences and found commonalities that could be applied to the Ownly solution.
                    </p>
                    <p>
                        After a couple of rounds of testing it quickly became apparent that the new navigation and layout approach was making sense, 
                        users were not getting lost and were moving forwards and backwards through the flow with ease.
                    </p>
                    <figure className="m-figure">
                        <img src={'/ownly-4.jpg'} alt="New concept" />
                        <figcaption>New concept</figcaption>
                    </figure>
                </div>
            </Section>

            {/* SOLUTION */}
            <Section className="section-secondary">
                <div className="container">
                    <h2>Solution</h2>
                    <p>
                        We continued to iterate on the new concepts and test them until we finalized the design. Handoff included acceptance criteria 
                        and additional rounds of meetings with engineering to ensure everyone was on the same page before committing to the development sprints.
                    </p>
                    <p>
                        We released the new flows to production and conducted an A/B test of conversion rates between the new and old designs. 
                        The results were concrete, conversion rates increased by 24%. The vast majority of the users were not getting confused or lost 
                        in the flow and were using the new features with ease. Engagement in the customization portion of the solution had increased by 32%.
                    </p>
                    <div className="m-highlight-grid">
                        <div className="m-highlight-grid-row m-highlight-grid-3">
                            <div className="m-highlight m-hightlight-invert">Conversion rates increased by 24%</div> 
                            <div className="m-highlight m-hightlight-invert">Customization engagement increased by 32%</div> 
                        </div> 
                    </div>
                    <p></p>
                    <h2>Takeaways</h2>
                    <p></p>
                    <div className="m-highlight m-hightlight-invert">
                        Small startups in the seed round don't have time to document when pushing out initial features. Mapping out the Build and Price flow, 
                        documenting the rules and features and producing a baseline proved to be invaluable for the remainder of the project.
                    </div>  
                    <div className="m-highlight m-hightlight-invert">
                        Seeking out other “big ticket” purchase examples really helped us to land on navigation and layout approaches which helped us to 
                        overcome the confusion of our initial Build and Price experience.
                    </div>  
                    <div className="m-highlight m-hightlight-invert">
                        Testing ideas early and frequently meant we didn't fall down design rabbit holes.
                    </div>  
                </div>
            </Section>
            <Footer />
        </Layout>
    );
}

export default IndexPage