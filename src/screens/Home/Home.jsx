import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => (
    <div className="container">
        <div className="row">
            <div className="col-12">
                <h1>Pick your Coin</h1>
                <div className="list-group">
                    <Link className="list-group-item list-group-item-action" to="/coins/BTC">
                        BTC
                    </Link>
                    <Link className="list-group-item list-group-item-action" to="/coins/ETH">
                        ETH
                    </Link>
                    <Link className="list-group-item list-group-item-action" to="/coins/BCH">
                        BCH
                    </Link>
                    <Link className="list-group-item list-group-item-action" to="/coins/LTC">
                        LTC
                    </Link>
                    <Link className="list-group-item list-group-item-action" to="/coins/ZRX">
                        ZRX
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default Home;