import React from 'react';

import Button from "../../components/button/button"
import ButtonExternal from "../../components/button/buttonExternal"

// FOOTER
const Footer = (props) => {
  return (
    <footer>
        <div class="content">
            <Button
                isIcon={true}
                isMail={true}
                mailAddress="highlandplumbingservicesfergus@gmail.com"
                mailSubject="Requesting Information"
                mailBody=""                    
                scheme="m-button-footer"
                text="Email Us"
            >
            </Button>
            <Button
                isIcon={true}
                isMail={false}
                scheme="m-button-footer"
                telephone="519-993-4703"
                text="519-993-4703"
            >
            </Button>
            <ButtonExternal
                link="https://www.facebook.com/profile.php?id=100086464066857"
                scheme="m-button-footer"
                text="Facebook"
            >
            </ButtonExternal>
        </div>
        <div className="copyright">
            <div>© {new Date().getFullYear()}, Highland Plumbing Services</div>
            <div>All rights reserved</div>
        </div>
    </footer>
  );
}

export default Footer