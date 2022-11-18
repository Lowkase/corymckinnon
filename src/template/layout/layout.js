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
                <meta name="keywords" content="" />
                <meta name="description" content="" />
                <meta http-equiv="content-language" content="en-us" />
                <link rel="icon" href={Favicon} sizes="any" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:thin,light,regular,bold,black" />
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