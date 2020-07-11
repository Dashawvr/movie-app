import React from "react";

import { socialMediaIcons } from '../Constants';

import './Footer.scss';

export function Footer(props) {


    return (
        <div className="may-footer">
            <div className="may-footer-content">
            <div className="may-footer-text">Movie app</div>
                <div className="may-footer-social-media-wrapper">
                    {
                        socialMediaIcons.map((item,key)=> {
                            return (
                               <a href=''><img key={key} className="may-footer-social-media-icon" src={item.src} alt={item.alt}/></a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}
