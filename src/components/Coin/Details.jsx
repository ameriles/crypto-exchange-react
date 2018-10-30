import React from 'react';
// TODO: to class
const Details = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Asset: {props.match.params.assetId}</h1>
                </div>
            </div>
        </div>
    );
};

export default Details;