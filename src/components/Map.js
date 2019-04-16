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
        const {markers} = this.state
        const {setActiveProperty} = this.props
         properties.map(property => {
            const {latitude, longitude, address} = property
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

            // creating info window for each marker
            const iw = new google.maps.InfoWindow({
                content: `<h1>${address}</h1>`
            })

            this.marker.iw = iw;

            // Set active property to state on click
            this.marker.addListener("click", () => {
                markers.forEach(marker => marker.iw.close())
                setActiveProperty(property, true)
            })

            // push marker to markers array
            markers.push(this.marker)

            // show active property info window
            markers[0].iw.open(this.map, this.marker)

        })

    }
    showInfoWindow = (index) => {
        const {markers} = this.state
        markers[index] && markers[index].iw.open(this.map, markers[index])
    }

    hideAllMarkers = () => {
        const {markers} = this.state

        markers.forEach(marker => marker.iw.close())
    }

    componentWillReceiveProps(nextProps) {
        const {activeProperty} = nextProps

        const {index} = activeProperty;
        // hide all other info boxes
        this.hideAllMarkers()

        // show info window for new active property
        this.showInfoWindow(index)

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