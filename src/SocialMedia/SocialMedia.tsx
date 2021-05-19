import React from 'react';
import './SocailMedia.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedinIn, faQuora, faStackOverflow, faTwitter} from '@fortawesome/free-brands-svg-icons';

function SocialMedia() {
    const socialMediaLinkAnsIcons = [
        {link: "https://www.linkedin.com/in/simplysanjeev/", icon: faLinkedinIn},
        {link: "https://github.com/simplysanjeev", icon: faGithub},
        {link: "https://stackoverflow.com/users/13128862/sanjeev-kumar?tab=profile", icon: faStackOverflow},
        {link: "https://twitter.com/Sanjeev61455039", icon: faTwitter},
        {link: "https://www.quora.com/profile/Sanjeev-Kumar-8462", icon: faQuora}
    ];
    return (<div id="name-social-container">
        <div className="text-center">
            <h1 id="my-name">Sanjeev Kumar</h1>
        </div>
        <div>
            <ul className="horizontal-list text-center">
                {socialMediaLinkAnsIcons.map(socialMediaLinkAnsIcon => <li><a
                    href={socialMediaLinkAnsIcon.link}><FontAwesomeIcon icon={socialMediaLinkAnsIcon.icon}
                                                                        className="social-icons"/></a></li>)}
            </ul>
        </div>
    </div>);
}

export default SocialMedia;