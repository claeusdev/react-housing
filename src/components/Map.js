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
        const {activeProperty} = this.props
        const {longitude, latitude} = activeProperty
            // eslint-disable-next-line no-undef
           this.map = new google.maps.Map(this.refs.map, {
                center: {
                    lat: latitude,
                    lng: longitude
                },
                mapTpyeControls: false,
                zoom: 10
            });
        
        
    }
    render() {
        return (
            <div id="map" ref="map" style={{position: "static !important"}}>
            </div>
        );
    }
}

Map.propTypes = {
    properties: PropTypes.array.isRequired
}

export default Map;