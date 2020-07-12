import React from 'react';
import {NavLink} from 'react-router-dom';

import Logo from './Logo';

import './../style/header.scss';

export default function Header() {
    return (
        <div class="header">
            <div class="topbar">
                use coupon <span class="code">PROMO30</span> for 30% off &hearts;
            </div>

            <div class="mainbar">
                <Logo />
                <div class="menu">
                    <NavLink to="/logo">history</NavLink>
                    <a href="/">products</a>
                    <a href="/">sale</a>
                </div>
            </div>

        </div>
    );
}