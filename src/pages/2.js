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
                        <h1>Twitter Spam Violation Workbench</h1>
                        <h3>Innodata</h3>
                    </div>

                    {/* STATS */}
                    <div className="m-stats">
                        <div className="stat">
                            <div>Position</div>
                            <div>Senior Product Designer</div>
                        </div>
                        <div className="stat">
                            <div>Duration</div>
                            <div>2021 - 6 months</div>
                        </div>
                        <div className="stat">
                            <div>Platform</div>
                            <div>Desktop</div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* MAIN FIGURE */}
            <Section>
                <div className="container">
                    <figure className="m-figure">
                        <img src={'/twitter-2.jpg'} alt="High fidelity design of Twitter Spam Violation Workbench" />
                        <figcaption>High fidelity wireframe</figcaption>
                    </figure>
                </div>
            </Section>

            {/* OVERVIEW */}
            <Section className="section-secondary">
                <div className="container">
                    <h2>Overview</h2>
                    <p>
                        Innodata is a global leader in ML/AI (machine learning / artificial intelligence) specializing in data collection for 
                        AI model training, annotating complex data to deliver accurate ground truth for ML/AI models and creating platforms 
                        that apply AI augmentation to client data.
                    </p>
                    <p>
                        The Twitter Spam Violation Workbench, one of many different types of annotation workbenches supplied to Twitter by Innodata, 
                        allows human moderators to quickly work through batches of Tweets that have been tagged for Spam Violation. 
                    </p>                    
                    <p>
                        Moderators visually scan the offending Tweet, search through the user's account to find incidents of past violations and then
                        answer questions to annotate the task. The annotated data is collated and sent back to Twitter to prime its ML 
                        algorithms ensuring the Twitter Spam  Violation AI becomes more accurate over time.
                        Moderators are scored by how many batches of tasks they can complete in a working session (SAR score). Moderators
                        must work quickly, and consistently to produce quality annotations.
                    </p>
                    <p>
                        After receiving feedback from Twitter, the internal team identified a need to improve the volume, consistency and quality of the data 
                        being fed into their ML algorithms. After a few meetings with our Twitter team, product management, and engineering it was determined 
                        that the best course of action was to improve the workbench experience for moderators.
                    </p>
                    <div className="m-highlight m-hightlight-invert">
                        How can the Twitter Spam Violation Workbench be improved to increase moderator SARs scores, consistency and quality?
                    </div>                     
                    <p>
                        The team agreed on a couple of KPIs to measure success and then we hit the ground running.
                    </p>
                    <div className="m-highlight-grid m-highlight-last">
                        <div className="m-highlight-grid-row m-highlight-grid-3">
                            <div className="m-highlight m-hightlight-invert">Increase SAR scores by 10%</div> 
                            <div className="m-highlight m-hightlight-invert">Better identify moderators that have the highest volume, impact and revenue</div> 
                        </div> 
                    </div>
                </div>
            </Section>

            {/* PROCESS */}
            <Section>
                <div className="container">
                    <h2>Process</h2>
                    <p>
                        As the sole designer on the project I needed to get a clear picture of the workbench rules and how moderators flowed through the Spam 
                        Violation annotation process. First, I parsed through multiple documents to condense the workbench ruleset into a concise list of 
                        requirements.
                    </p>
                    <p>
                        The Twitter team supplied me with dozens of screen capture videos of moderators in action, this source of real-life interactions
                        proved to be invaluable for the remainder of the project. 
                    </p>
                    <p>
                        The videos exposed many pain points that inhibited the moderators from producing faster SAR scores. Moderators used many 
                        different browser tabs to view Tweets, user accounts, keyword searches, and to translate text into their native languages. 
                        Moderators were spending a significant amount of time copying and pasting text between browser tabs. 
                        We went back to the Twitter team and confirmed the validity of the pain points and determined that addressing them would help to increase 
                        SARs scores. 
                    </p>
                    <p>
                        We had a large amount of data compiled detailing how moderators flowed through the workbench. After mapping the data, we met with the 
                        Twitter team to confirm our assumptions. It took a few iterations to get a correct baseline which we then used as a source of
                        truth for going wide during the design phase. 
                    </p>
                    <figure className="m-figure">
                        <img src={'/twitter-3.jpg'} alt="Early prototype" />
                        <figcaption>Mapping the Twitter moderator experience</figcaption>
                    </figure>
                    <p>
                        Including the Twitter team in every step of the design process was very important. 
                        We brought together key stakeholders and moderators for a “What If” exercise allowing us to go wide with our thinking.
                    </p>
                    <figure className="m-figure">
                        <img src={'/twitter-5.jpg'} alt="What if exercise" />
                        <figcaption>What if exercise</figcaption>
                    </figure>
                    <p>
                        Based on observations from the research and ideation sessions it was clear we needed to bring all data
                        points that the moderators required inline to the app. Accessing data across multiple browser tabs was costing 
                        moderators time. We also needed to give the moderators tools to translate and
                        copy text with ease. I spent time producing mock-ups with different layouts, interactions and ideas and met 
                        again with the team to validate.
                    </p>
                    <figure className="m-figure">
                        <img src={'/twitter-6.jpg'} alt="An initial mockup" />
                        <figcaption>An initial mockup</figcaption>
                    </figure>
                    <p>
                        While the team agreed with most design concepts, the interface was busy and missed important elements. 
                        We continued to brainstorm and iterate the design to take away extraneous items (history section), 
                        add small, useful features (inline translation and batch/task progress) and improved interactions 
                        (minimize tasks when completed).
                    </p>
                    <figure className="m-figure">
                        <img src={'/twitter-7.jpg'} alt="High fidelity wireframe, very close" />
                        <figcaption>High-fidelity wireframe, very close</figcaption>
                    </figure>
                </div>
            </Section>

            {/* SOLUTION */}
            <Section className="section-secondary">
                <div className="container">
                    <h2>Solution</h2>
                    <p>
                        Once the design was complete and we had stakeholder sign-off, I finalized the wireframes and acceptance criteria.
                        We met with engineering to kick off the development phase and had touchpoints with them regularly to ensure the design was 
                        understood and implemented correctly.
                    </p>
                    <p>
                        After the workbench had been in production for a few weeks, we were able to pull some stats and reactions from 
                        the Twitter team to back up our initial goals and KPIs.
                    </p>
                    <div className="m-highlight-grid">
                        <div className="m-highlight-grid-row m-highlight-grid-3">
                            <div className="m-highlight m-hightlight-invert">SAR scores increased by 22%</div> 
                            <div className="m-highlight m-hightlight-invert">Managers had more trust in the SAR data to identify top and bottom performers.</div> 
                        </div> 
                    </div>
                    <p></p>
                    <h2>Takeaways</h2>
                    <p></p>
                    <div className="m-highlight m-hightlight-invert">
                        It was important to have many touchpoints with the Twitter team and include them in the design process. The Twitter 
                        team felt invested in the changes to the workbench which ultimately helped to prove its success in production.
                    </div>  
                    <div className="m-highlight m-hightlight-invert">
                        Watching videos of user interactions is an invaluable way to understand flow and pain points.
                    </div>  
                    <div className="m-highlight m-hightlight-invert">
                        Twitter moderators see some truly harmful visuals. I wish we could have designed a way to mask some of the harmful 
                        imagery they are exposed to.
                    </div>  
                </div>
            </Section>
            <Footer />
        </Layout>
    );
}

export default IndexPage