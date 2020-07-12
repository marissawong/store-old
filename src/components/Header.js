import React from 'react';
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
                    <a href="/">history</a>
                    <a href="/">products</a>
                    <a href="/">sale</a>
                </div>
            </div>

        </div>
    );
}