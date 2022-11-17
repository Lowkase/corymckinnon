import React from "react"

import "../styles/styles.scss"

import Layout from "../template/layout/layout"
import Header from "../template/header/header.js"
import Footer from "../template/footer/footer.js"
import Content from "../template/section/section.js"

// INDEX
const IndexPage = (props) => {
    return (
        <Layout>
            <Header/>
            <Content>
                {/* CARD GRID */}
                <section className="m-card-grid">
                    {/* ROW 1 */}
                    <div className="m-card-grid-row m-card-grid-2">
                        <div className="m-card">
                            <h2 className="title">CARD</h2>
                            <p>
                                Lorum Ipsum
                            </p>
                            <p>
                                Lorum Ipsum 
                            </p>
                        </div>
                        <div className="m-card">
                            <h2 className="title">CARD</h2>
                            <p>
                                Lorum Ipsum
                            </p>
                        </div>
                    </div>

                    {/* ROW 2 */}
                    <div className="m-card-grid-row m-card-grid-2">
                        <div className="m-card">
                            <h2 className="title">CARD</h2>
                            <p>
                                Lorum Ipsum
                            </p>
                        </div>
                        <div className="m-card">
                            <h2 className="title">CARD</h2>
                            <p>
                                Lorum Ipsum
                            </p>
                        </div>
                    </div>
                </section>

            </Content>
            <Footer />
        </Layout>
    );
}

export default IndexPage