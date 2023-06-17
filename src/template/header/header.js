import React from 'react';

import ButtonEmail from "../../components/button/ButtonEmail"
import ButtonExternal from "../../components/button/buttonExternal"

import SvgEmail from "../../assets/svgs/email.js"
import SvgLinkedin from "../../assets/svgs/linkedin.js"
import SvgDribbble from "../../assets/svgs/dribbble.js"
import SvgResume from "../../assets/svgs/resume.js"

// HEADER
const Header = (props) => {
  return (
    <header>
        <a className="logo" href="/">Cory Mckinnon</a>
        <a className="title" href="/">Senior Product Designer</a>
        <div className="links">
            <ButtonEmail
                mailAddress="cory.mckinnon@gmail.com"
                svgSvg={<SvgEmail className="icon" />}
                text="Email"
            >
            </ButtonEmail>
            <ButtonExternal
                link="https://www.linkedin.com/in/cory-mckinnon-62337a3/"
                svgSvg={<SvgLinkedin className="icon" />}
                text="Linkedin"
            >
            </ButtonExternal>
            <ButtonExternal
                link="https://dribbble.com/CoryMckinnon"
                svgSvg={<SvgDribbble className="icon" />}
                text="Dribbble"
            >
            </ButtonExternal>
            <ButtonExternal
                link="https://drive.google.com/file/d/1DSRCKpfpMO5Cr-uNbnWMpDXnOMrQ6cA9/view?usp=sharing"
                svgSvg={<SvgResume className="icon" />}
                text="Resume"
            >
            </ButtonExternal>
        </div>
    </header>
  );
}

export default Header