import React from 'react';
import PropTypes from 'prop-types'


export const Listing = ({address, price, latitude, longitude, bathrooms, bedrooms, city, picture }) => {

    return (
        <div className="media">
        <img className="mr-3" src={picture} alt="Generic placeholder" />
        <div className="media-body">
            <h5 className="mt-0">{price}</h5>
            <p>{address}, {city}</p>
            <p>{bedrooms} Bedroom(s) - {bathrooms} Bathroom(s)</p>
        </div>
        </div>
    )
}

Listing.prototype = {
    property: PropTypes.object.isRequired
}


