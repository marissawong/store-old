import React, {useEffect, useState} from 'react';
import './../style/collection.scss';
import './../images/products/acer-sa230.jpg';

import Products from './../utils/Products';

const Collection = ({children, title, keyword}) => {
    const [collectionResults, setCollectionResults] = useState([]);

    useEffect(() => {
        const results = Products.filter(proj => {
            return Object.keys(proj).some(key =>
                proj[key].toLowerCase().includes(keyword.toLowerCase())
            )
        });
        setCollectionResults(results);
    }, []
    );

    if (!children) {
        children = 'a special collection for you';
    }
    if (!title) {
        title = 'recommended for you';
    }

    return (
        <div class="collection">
            <div class="title">{title}</div>
            <div class="subtitle">
                {children}
            </div>

            <div class="products">
                {collectionResults.map(item => (
                    <div class="singleProduct">
                        <div class="img">
                            <img src="/"></img>
                        </div>
                        <div class="productTitle">
                            {item.title}
                        </div>
                        <div class="productBrand">
                            {item.brand}
                        </div>
                        
                        <div class="buy">
                            <div class="add">
                                <button class="addToCart"><i class="fas fa-shopping-cart" />add to cart</button>
                            </div>

                            <div class="price">
                                ${item.price}
                            </div>
                        </div>
                        
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Collection;