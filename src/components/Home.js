import React, {useEffect, useState} from 'react';

import './../style/home.scss';

import Collection from './Collection';

export default function Home() {

    const [collection, setCollection] = useState([]);

    return (
        <div class="home">
            <div class="banner">
                <div class="text">
                    your #1 <br />
                    store for all <br/>
                    stationery and <br/>
                    office supplies.
                </div>

                <div class="company">
                    
                    <div class="name">
                        dunder mifflin.
                    </div>

                    <div class="description">
                        our products are hand picked by a specialized team and 
                        brought to you with the best prices in the market. <br />
                        need help? contact us at <span class="email">contact@dmpaper.com</span>
                    </div>

                </div>
            </div>

            {/* <div class="specials">
                <div class="title">home office collection</div>
                <div class="subtitle">
                    our special selection for you to comfortably work & study 
                    at home and increase your productivity
                </div>

            </div> */}

            <Collection
                title='Home Office Collection'
                keyword='home office'>
                    our special selection for you to comfortably work & study 
                    at home and increase your productivity
            </Collection>

        </div>
    );
}