import React from 'react';
import { Global, css } from '@emotion/react'
import { renderToStaticMarkup } from 'react-dom/server';
import { MdNavigateNext } from "react-icons/md";
import { LuPencil } from "react-icons/lu";
import { FaLock } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";

const my_styles = css
    `
        *, *:before, *:after {
            color: white;
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-size: 1.5rem;
        }

        .profile-page-container {
            height: 100vh;
            width: 100vw;
            background-color: black;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px;
        }

        .profile-account-settings {
            background-color: #1f1f1f;
            height: 500px;
            width: 60vw;
            border-radius: 10px;
        }

        .profile-choice {
            width: 100%;
            height: 100%;
            background-color: inherit;
            display: flex;
            align-items: center;
        }

        .profile-choice:after {
            content: var(--arrow-icon);
        }

        .profile-icon-box {
            height: 30px;
            width: 30px;
            background-color: red;
            border-radius: 7px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .profile-icon {
            width: 70%;
            height: 70%;
        }

        .account-settings-title {
            font-size: 2rem;
        }
    `

const Icon = ({ icon, ...props }) => {
    const svgString = renderToStaticMarkup(React.createElement(icon, props));
    const dataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`;
    
    return dataUrl;
};

export default function ProfilePage() {
    const arrowIcon = Icon({ icon: MdNavigateNext, size: '30', color: 'white' });
    return (
        <>
            <Global styles={my_styles} />
            <div className='profile-page-container'>
                <div className='profile-account-settings'>
                    <p className='account-settings-title'>Account</p>
                    <div className='profile-settings-choices'>
                        <div className='profile-choice' style={{ '--arrow-icon': `url(${arrowIcon})` }}>
                            <div className='profile-icon-box'>
                                <LuPencil className='profile-edit-info-icon profile-icon' style={{'color': 'goldenrod',}}/>
                            </div>
                            <div className='profile-edit-info'>Edit Profile</div>
                        </div>
                        <div className='profile-choice' style={{ '--arrow-icon': `url(${arrowIcon})` }}>
                            <div className='profile-icon-box'>
                                <FaLock className='profile-change-password-icon profile-icon' style={{'color': 'goldenrod',}}/>
                            </div>
                            <div className='profile-change-password'>Change Password</div>
                        </div>
                        <div className='profile-choice' style={{ '--arrow-icon': `url(${arrowIcon})` }}>
                            <div className='profile-icon-box'>
                                <FaSignOutAlt className='profile-sign-out-icon profile-icon' style={{'color': 'goldenrod',}}/>
                            </div>
                            <div className='profile-sign-out'>Sign Out</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}