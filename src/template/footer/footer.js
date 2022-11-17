import React from 'react';

import ButtonEmail from "../../components/button/ButtonEmail"
import ButtonExternal from "../../components/button/buttonExternal"

// FOOTER
const Footer = (props) => {
  return (
    <footer>
        <div class="content">
            <ButtonEmail
                mailAddress="cory.mckinnon@gmail.com"
                scheme="m-button-footer"
                text="Email"
            >
            </ButtonEmail>
            <ButtonExternal
                link="Linked In"
                scheme="m-button-footer"
                text="Linked In"
            >
            </ButtonExternal>
            <ButtonExternal
                link="Dribbble"
                scheme="m-button-footer"
                text="Dribbble"
            >
            </ButtonExternal>
            <ButtonExternal
                link="Resume"
                scheme="m-button-footer"
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