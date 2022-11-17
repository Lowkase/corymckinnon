import React from 'react';
import { Helmet } from "react-helmet";

import Main from "../main/main.js"
import Favicon from '../../assets/images/favicon.ico'

// LAYOUT
const Layout = (props) => {
    return (
        <div>
            <Helmet>
                <meta name="title" content="Highland Plumbing Services" />
                <meta name="keywords" content="Plumbing, residential, commercial, water treatment, backflow, pressure tank, Fergus, Elora, Guelph, Wellington, Orangeville" />
                <meta name="description" content="High quality plumbing services for your home including residential and commmercial, water treatment, backflow and pressure tanks. Servicing Fergus, Elora, Guelph, Elmira, Wellington North and Orangeville." />
                <meta http-equiv="content-language" content="en-us" />
                <meta name="google-site-verification" content="rP6wtcUXd43ff9l0IWw3Chg09wbtAUbIdszfjcJ6TrI" />
                <link rel="icon" href={Favicon} sizes="any" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans|Secular+One" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://highlandplumbingservices.ca/" />
                <meta property="og:title" content="Highland Plumbing Services" />
                <meta property="og:description" content="" />
                <meta property="og:image" content="" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://highlandplumbingservices.ca/" />
                <meta property="twitter:title" content="Highland Plumbing Services" />
                <meta property="twitter:description" content="" />
                <meta property="twitter:image" content="" />
            </Helmet>
            <div id="theme" className="theme">
                <div className="app t-layout">
                    <Main props = { props.children }></Main>
                </div>
            </div>
        </div>
    );
}

export default Layout