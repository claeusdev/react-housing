import React, { Component } from 'react';
import data from '../Data'
import { Listing } from './Listing';
class App extends Component {
  state = {
    properties: data.properties,
    activeProperty: data.properties[0]
  }
  render() {
    const {properties} = this.state
    return (
      <div className="App row">
        <div className="col-md-6">
        
        </div>
        <div className="col-md-6">
          {properties.map(property => {
           return <Listing key={property._id} {...property}/>
          })}
        </div>
      </div>
    );
  }
}

export default App;
