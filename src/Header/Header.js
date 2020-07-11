import React from "react";
import Logo from "../icons/cinema.png";
import {links} from "../Constants";
import './Header.scss';
import { User } from '../User/User';
import  { Link } from "react-router-dom";

export const Header = (props) => {
    return (
        <div className='my-header'>
            <img src={Logo} className='my-header-logo'/>
            <div className="my-header-links-wrapper">
                {
                    links.map((item,key)=> {
                        return (
                            <div key={key} className="nav-item">

                                <Link to={item.link}>
                                    <div className="my-header-links-wrapper-link nav-link">{item.name}</div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
            <User/>
        </div>
    );

}