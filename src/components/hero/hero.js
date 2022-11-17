import React from 'react'

import Button from "../../components/button/button"
import ButtonExternal from "../../components/button/buttonExternal"
import HeroImage from "../../assets/images/hero.png"
import SvgLogo from "../../assets/svgs/logo";

// HERO
const Hero = (props) => {
    return (
        <div className="m-hero">
            <img className="image" src={ HeroImage } alt="Highland Plumbing Services" />
            <div className="mask"></div>
            <div className="content">
                <div className="left">
                    <SvgLogo className="logo" />
                </div>
                <div className="right">
                    <h1 className="title">Cory Mckinnon</h1>
                    <p className="description">
                        Replace
                    </p>
                </div>
            </div>
            <div className="actions">
                <ButtonExternal
                    link="https://www.facebook.com/profile.php?id=100086464066857"
                    scheme="m-button-secondary"
                    text="Facebook"
                >
                </ButtonExternal>
                <Button
                    isIcon={true}
                    isMail={true}
                    mailAddress="highlandplumbingservicesfergus@gmail.com"
                    mailSubject="Requesting Information"
                    mailBody=""                    
                    scheme="m-button-secondary"
                    text="Email Us"
                >
                </Button>
                <Button
                    isIcon={true}
                    isMail={false}
                    scheme="m-button-secondary"
                    telephone="519-993-4703"
                    text="519-993-4703"
                >
                </Button>
            </div>
        </div>
    );
}

export default Hero