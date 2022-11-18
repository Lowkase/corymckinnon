import React from 'react';

import ButtonEmail from "../../components/button/ButtonEmail"
import ButtonExternal from "../../components/button/buttonExternal"

import SvgEmail from "../../assets/svgs/email";
import SvgLinkedin from "../../assets/svgs/linkedin";
import SvgDribbble from "../../assets/svgs/dribbble";
import SvgCv from "../../assets/svgs/cv";

// FOOTER
const Header = (props) => {
  return (
    <header>
        <a className="logo" href="/">Cory Mckinnon</a>
        <div className="linksLarge">
            <ButtonEmail
                mailAddress="cory.mckinnon@gmail.com"
                text="Email"
            >
            </ButtonEmail>
            <ButtonExternal
                link="https://www.linkedin.com/in/cory-mckinnon-62337a3/"
                text="Linked In"
            >
            </ButtonExternal>
            <ButtonExternal
                link="https://dribbble.com/CoryMckinnon"
                text="Dribbble"
            >
            </ButtonExternal>
            <ButtonExternal
                link="https://docs.google.com/document/d/1RcVqvD-w9cyuay0HiPRBK6v_2gBLfZzPrLQMAAq5GTg/edit?usp=sharing"
                text="Resume"
            >
            </ButtonExternal>
        </div>
        <div className="linksSmall">
            <ButtonEmail
                mailAddress="cory.mckinnon@gmail.com"
                svgShow = { true }
                svgSvg = { <SvgEmail className="contact" /> }
                text="Email"
            >
            </ButtonEmail>
            <ButtonEmail
                link="https://www.linkedin.com/in/cory-mckinnon-62337a3/"
                svgShow = { true }
                svgSvg = { <SvgLinkedin className="contact" /> }
                text="Linkedin"
            >
            </ButtonEmail>
            <ButtonEmail
                link="https://dribbble.com/CoryMckinnon"
                svgShow = { true }
                svgSvg = { <SvgDribbble className="contact" /> }
                text="Dribbble"
            >
            </ButtonEmail>
            <ButtonEmail
                link="https://docs.google.com/document/d/1RcVqvD-w9cyuay0HiPRBK6v_2gBLfZzPrLQMAAq5GTg/edit?usp=sharing"
                svgShow = { true }
                svgSvg = { <SvgCv className="contact" /> }
                text="Resume"
            >
            </ButtonEmail>
        </div>            
    </header>
  );
}

export default Header