import React from "react";
import UserIcon from '../icons/user.png';
import './User.scss';

export const User = () => {
    return(
        <div className="user-info">
            <img src={UserIcon} className="user-info-avatar "/>
        </div>
    );
}