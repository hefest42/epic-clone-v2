import React from "react";

import { AiFillFacebook, AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { IoIosArrowUp } from "react-icons/io";
import { SiUnrealengine, SiEpicgames } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-top space-between">
                    <div>
                        <AiFillFacebook />
                        <AiOutlineTwitter />
                        <AiFillYoutube />
                    </div>
                    <div>
                        <button className="center">
                            <IoIosArrowUp />
                        </button>
                    </div>
                </div>

                <div className="footer-links center">
                    <div className="footer-links__container">
                        <div className="footer-links__container-title">Resources</div>
                        <div className="footer-links__container-list">
                            <ul>
                                <li>Support-A-Creator</li>
                                <li>Publish on Epic Games</li>
                                <li>Careers</li>
                                <li>Company</li>
                            </ul>
                            <ul>
                                <li>Fan Art Policy</li>
                                <li>UX Research</li>
                                <li>Store EULA</li>
                            </ul>
                            <ul>
                                <li>Online Services</li>
                                <li>Community Rules</li>
                                <li>Epic Newsroom</li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-links__container">
                        <div className="footer-links__container-title">Made by Epic Games</div>
                        <div className="footer-links__container-list center">
                            <ul>
                                <li>Battle Breakers</li>
                                <li>Fortnite</li>
                                <li>Infinity Blade</li>
                            </ul>
                            <ul>
                                <li>Robo Recall</li>
                                <li>Shadow Complex</li>
                                <li>Unreal Tournament</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-line"></div>

                <div className="footer-rights">
                    © 2022, Epic Games, Inc. All rights reserved. Epic, Epic Games, the Epic Games logo, Fortnite, the
                    Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal
                    Tournament logo are trademarks or registered trademarks of Epic Games, Inc. in the United States of
                    America and elsewhere. Other brands or product names are the trademarks of their respective owners.
                    Non-US transactions through Epic Games International, S.à r.l.
                </div>
                <div className="footer-logo space-between">
                    <div>
                        <span>Terms of Service</span>
                        <span>Privacy Policy</span>
                        <span>Store Refund Policy</span>
                    </div>
                    <div>
                        <SiEpicgames />
                        <SiUnrealengine />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
