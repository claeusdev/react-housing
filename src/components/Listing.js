import React from 'react';
import PropTypes from 'prop-types'


export const Listing = ({property, activeProperty, setActiveProperty}) => {
    console.log(property)
    const {
        index,
        address,
        price,
        latitude,
        longitude,
        bathrooms,
        bedrooms,
        city,
        picture} = property
        
    return (
        <div id={`card-${index}`} className={`media listing align-items-center ${property === activeProperty ? "is-active ": ""}`} onClick={() => setActiveProperty(property, false)}>
        <img className="mr-3" src={picture} alt="Generic placeholder" />
        <div className="media-body">
            <h5 className="mt-0">{price}</h5>
            <p>{address}, {city}</p>
            <p>{bedrooms} Bedroom(s) - {bathrooms} Bathroom(s)</p>
        </div>
        </div>
    )
}

Listing.propTypes = {
    property: PropTypes.object.isRequired,
    activeProperty: PropTypes.object.isRequired,
    setActiveProperty: PropTypes.func.isRequired
}


