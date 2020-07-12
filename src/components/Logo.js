import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';

import './../style/logo.scss';

function Logo() {
    const [title, setTitle] = useState('dm.');

    return (
        <NavLink to="/store/">
            <div class="logo"
                //onMouseOver={() => setTitle('dunder mifflin.')}
                //onMouseOut={() => setTitle('dm.')}
            >
                {title}
            </div>
        </NavLink>
    );
}

export default Logo;