import React from 'react';

import ButtonEmail from "../../components/button/ButtonEmail"
import ButtonExternal from "../../components/button/buttonExternal"

// FOOTER
const Header = (props) => {
  return (
    <header>
        <div class="content">
            <div className="logo">Cory Mckinnon</div>
            <ButtonEmail
                mailAddress="cory.mckinnon@gmail.com"
                scheme="m-button-header"
                text="Email"
            >
            </ButtonEmail>
            <ButtonExternal
                link="Linked In"
                scheme="m-button-header"
                text="Linked In"
            >
            </ButtonExternal>
            <ButtonExternal
                link="Dribbble"
                scheme="m-button-header"
                text="Dribbble"
            >
            </ButtonExternal>
            <ButtonExternal
                link="Resume"
                scheme="m-button-header"
                text="Resume"
            >
            </ButtonExternal>
        </div>        
    </header>
  );
}

export default Header