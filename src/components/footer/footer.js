import "./style.css";

import socialVk from "../../img/icons/vk.svg"
import socialInstagram from "../../img/icons/instagram.svg"
import socialTwitter from "../../img/icons/twitter.svg"
import socialGitHub from "../../img/icons/gitHub.svg"
import socialLinkedIn from "../../img/icons/linkedIn.svg"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="#!"><img src={socialVk} alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src={socialInstagram} alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src={socialTwitter} alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src={socialGitHub} alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src={socialLinkedIn} alt="Link"/></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2022 frontend-dev.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;