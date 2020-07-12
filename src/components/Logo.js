import React, {useState} from 'react';
import './../style/logo.scss';

function Logo() {
    const [title, setTitle] = useState('dm.');

    return (
        <div class="logo"
            //onMouseOver={() => setTitle('dunder mifflin.')}
            //onMouseOut={() => setTitle('dm.')}
            >
            {title}
        </div>
    );
}

export default Logo;