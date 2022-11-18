import React from 'react';

import ButtonEmail from "../../components/button/ButtonEmail"
import ButtonExternal from "../../components/button/buttonExternal"

// FOOTER
const Footer = (props) => {
  return (
    <footer>
        <div class="links">
            <ButtonEmail
                mailAddress="cory.mckinnon@gmail.com"
                scheme="m-button-light"
                text="Email"
            >
            </ButtonEmail>
            <ButtonExternal
                link="https://www.linkedin.com/in/cory-mckinnon-62337a3/"
                scheme="m-button-light"
                text="Linked In"
            >
            </ButtonExternal>
            <ButtonExternal
                link="https://dribbble.com/CoryMckinnon"
                scheme="m-button-light"
                text="Dribbble"
            >
            </ButtonExternal>
            <ButtonExternal
                link="https://docs.google.com/document/d/1RcVqvD-w9cyuay0HiPRBK6v_2gBLfZzPrLQMAAq5GTg/edit?usp=sharing"
                scheme="m-button-light"
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