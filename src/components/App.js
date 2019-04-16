import React, { Component } from 'react';
import data from '../Data'
import { Listing } from './Listing';
import Map from './Map';
import jump from 'jump.js'

class App extends Component {
  state = {
    properties: data.properties,
    activeProperty: data.properties[0]
  }

  setActiveProperty = (property) => {
    const {index} = property;
    this.setState({
      activeProperty: property
    })
    // scroll to active property
    const target = `#card-${index}`
    jump(target, {
      duration: 800,
      // eslint-disable-next-line no-undef
      easing: jump.easeInOutQuad,
      a11y: true
    })

  }

  render() {
    const {properties, activeProperty} = this.state
    return (
      <div className="App row">
        <div className="col-md-7" >
          <Map properties={properties} activeProperty={activeProperty} setActiveProperty={this.setActiveProperty}/>
        </div>
        <div className="col-md-5" style={{overflowY: "auto", height: "100vh"}}>
          {properties.map(property => {
           return <Listing key={property._id} property={property} activeProperty={activeProperty}/>
          })}
        </div>
      </div>
    );
  }
}

export default App;
