import React, { Component } from 'react';
import data from '../Data'
import { Listing } from './Listing';
import Map from './Map';
class App extends Component {
  state = {
    properties: data.properties,
    activeProperty: data.properties[0]
  }
  render() {
    const {properties, activeProperty} = this.state
    return (
      <div className="App row">
        <div className="col-md-6" style={{width: "100%", height: "100vh"}}>
          <Map properties={properties} activeProperty={activeProperty}/>
        </div>
        <div className="col-md-6">
          {properties.map(property => {
           return <Listing key={property._id} property={property} activeProperty={activeProperty}/>
          })}
        </div>
      </div>
    );
  }
}

export default App;
