import React from 'react';

import ButtonEmail from "../../components/button/ButtonEmail"
import ButtonExternal from "../../components/button/buttonExternal"

// HEADER
const Header = (props) => {
  return (
    <header>
        <a className="logo" href="/">Cory Mckinnon</a>
        <div className="links">
            <ButtonEmail
                mailAddress="cory.mckinnon@gmail.com"
                text="Email"
            >
            </ButtonEmail>
            <ButtonExternal
                link="https://www.linkedin.com/in/cory-mckinnon-62337a3/"
                text="Linkedin"
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
    </header>
  );
}

export default Header