/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types'

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            markers: []
         };
    }
    componentDidMount() {
        const {activeProperty, properties} = this.props
        const {longitude, latitude} = activeProperty
            // eslint-disable-next-line no-undef
           this.map = new google.maps.Map(this.refs.map, {
                center: {
                    lat: latitude,
                    lng: longitude
                },
                mapTypeControl: false,
                zoom: 15
            });
        this.addMarkers(properties)
        
    }
    addMarkers = (properties) => {
        const {setActiveProperty} = this.props
         properties.map(property => {
            const {latitude, longitude} = property
            // eslint-disable-next-line no-undef
            this.marker = new google.maps.Marker({
                position: {
                    lat: latitude,
                    lng: longitude
                },
                map: this.map,
                
                icon: {
                    url: "https://img.icons8.com/color/48/000000/marker.png",
                },
            })

            this.marker.addListener("click", () => {
                setActiveProperty(property)
            })
        })

    }
    render() {
        return (
            <div id="map" ref="map" style={{position: "static !important"}}>
            </div>
        );
    }
}

Map.propTypes = {
    properties: PropTypes.array.isRequired,
    setActiveProperty: PropTypes.func.isRequired
}

export default Map;