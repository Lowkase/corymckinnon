import React from "react"

import "../styles/styles.scss"

import Layout from "../template/layout/layout"
import Footer from "../template/footer/footer.js"
import Content from "../template/section/section.js"

import Button from "../components/button/button"
import Hero from "../components/hero/hero.js"
import Testimonial from "../components/testimonial/testimonial.js"

import SvgResidentialCommercial from "../assets/svgs/residentialcommercial.js"
import SvgWaterTreatments from "../assets/svgs/watertreatments.js"
import SvgBackflow from "../assets/svgs/backflow.js"
import SvgPressureTank from "../assets/svgs/pressuretank.js"

// INDEX
const IndexPage = (props) => {
    return (
        <Layout>
            <Content>
                <Hero />

                {/* CARD GRID */}
                <section className="m-card-grid">
                    {/* ROW 1 */}
                    <div className="m-card-grid-row m-card-grid-2">
                        <div className="m-card">
                            <SvgResidentialCommercial />
                            <h2 className="title">CARD</h2>
                            <p>
                                Lorum Ipsum
                            </p>
                            <p>
                                Lorum Ipsum 
                            </p>
                            <Button
                                isIcon={false}
                                isMail={true}
                                mailAddress="test@gmail.com"
                                mailSubject="Test"
                                mailBody=""                    
                                scheme="m-button-primary"
                                text="Button"
                                >
                            </Button>
                        </div>
                        <div className="m-card">
                            <SvgWaterTreatments />
                            <h2 className="title">CARD</h2>
                                <p>
                                    Lorum Ipsum
                                </p>
                                <Button
                                isIcon={false}
                                isMail={true}
                                mailAddress="test@gmail.com"
                                mailSubject="Test"
                                mailBody=""                    
                                scheme="m-button-primary"
                                text="Button"
                                >
                            </Button>
                        </div>
                    </div>

                    {/* ROW 2 */}
                    <div className="m-card-grid-row m-card-grid-2">
                        <div className="m-card">
                            <SvgBackflow />
                            <h2 className="title">CARD</h2>
                            <p>
                                Lorum Ipsum
                            </p>
                            <Button
                                isIcon={false}
                                isMail={true}
                                mailAddress="highlandplumbingservicesfergus@gmail.com"
                                mailSubject="Residential / Commercial Quote Requet"
                                mailBody=""                    
                                scheme="m-button-primary"
                                text="Get a Quote"
                            >
                            </Button>
                        </div>
                        <div className="m-card">
                            <SvgPressureTank />
                            <h2 className="title">CARD</h2>
                            <p>
                                Lorum Ipsum
                            </p>
                            <Button
                                isIcon={false}
                                isMail={true}
                                mailAddress="test@gmail.com"
                                mailSubject="Test"
                                mailBody=""                    
                                scheme="m-button-primary"
                                text="Button"
                                >
                            </Button>
                        </div>
                    </div>
                </section>


                {/* ABOUT */}
                <section className="section-single section-background-dark">
                    <h2 className="title">ABOUT</h2>
                    <p>
                        Lorum ipsum. 
                    </p>
                </section>


                {/* TESTIMONIALS */}
                <section className="section-single section-background-light">
                    <div className="m-testimonial-list">
                        < Testimonial
                            text = "Testimonial"
                            person="Firstname Lastname"
                        />
                    </div>
                </section>
            </Content>
            <Footer />
        </Layout>
    );
}

export default IndexPage