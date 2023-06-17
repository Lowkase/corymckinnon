import React from 'react';

import ButtonEmail from "../../components/button/ButtonEmail"
import ButtonExternal from "../../components/button/buttonExternal"

import SvgEmail from "../../assets/svgs/email.js"
import SvgLinkedin from "../../assets/svgs/linkedin.js"
import SvgDribbble from "../../assets/svgs/dribbble.js"
import SvgResume from "../../assets/svgs/resume.js"

// FOOTER
const Footer = (props) => {
  return (
    <footer>
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
        <div className="copyright">
            <div>© {new Date().getFullYear()}, Lowkase Web Development Inc.</div>
            <div>All rights reserved</div>
        </div>
    </footer>
  );
}

export default Footer