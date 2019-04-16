import React, { Component } from 'react';
import data from '../Data'
import { Listing } from './Listing';
import Map from './Map';
class App extends Component {
  state = {
    properties: data.properties,
    activeProperty: data.properties[0]
  }

  setActiveProperty = (property) => {
    this.setState({
      activeProperty: property
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
