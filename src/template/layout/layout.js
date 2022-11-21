import React from 'react';
import { Helmet } from "react-helmet";

import Main from "../main/main.js"
import Favicon from '../../assets/images/favicon.ico'

// LAYOUT
const Layout = (props) => {
    return (
        <div>
            <Helmet>
                <meta name="title" content="Cory Mckinnon" />
                <meta name="keywords" content="Cory Mckinnon, design, designer, product design, portfolio, ui/ux, ux" />
                <meta name="description" content="Complex design problems simplified. I'm a Designer with a passion for complex systems, big data, AI/ML and solving problems." />
                <meta http-equiv="content-language" content="en-us" />
                <link rel="icon" href={Favicon} sizes="any" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:thin,light,regular,bold,black" />
            </Helmet>
            <div className="app t-layout">
                <Main props = { props.children }></Main>
            </div>
        </div>
    );
}

export default Layout