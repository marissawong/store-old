import React from 'react';
import {NavLink} from 'react-router-dom';

import Logo from './Logo';

import './../style/header.scss';

export default function Header() {
    return (
        <div class="header">
            <div class="headerfixed">
            <div class="topbar">
                use coupon <span class="code">DMSALE30</span> for 30% off &hearts;
            </div>

            <div class="mainbar">
                <Logo />
                <div class="menu">
                    <NavLink to="/store/logo">history</NavLink>
                    <NavLink to="/store/products">products</NavLink>
                    <NavLink to="/store/sale">sale</NavLink>

                    <div class="cart">
                    <NavLink to="/store/cart">
                        <i class="fas fa-shopping-cart" /> $<span id="total">0.00</span>
                    </NavLink></div>

                </div>
            </div>
            </div>
        </div>
    );
}