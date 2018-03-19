import React, { Component } from 'react';
import MapContainer from './components/InitialMap';
import HeaderContainer from './components/Header'
//import Sidebar from './components/Sidebar';
import Search from './components/Search'
// import getPlaces from './services/googlePlaces';
import Container from './components/Places'
import 'milligram';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      places: ["place1", "place2"],
      searchTerm: 'food',
      pos: {},

    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    console.log(event.target.value)
    this.setState({searchTerm: event.target.value})
  }

  handleLocationChange = (pos) => {
    console.log("location change " + JSON.stringify(pos))
    this.setState({
      pos: pos
    })
  }

  handleSubmit() {
    console.log("submitted word")
    console.log(this.state.searchTerm)
  }

 /* componentDidMount(){
    console.log("getPlaces")
     getPlaces(this.state.mapCenter.lat,this.state.mapCenter.lng,this.state.searchTerm).then((places) => {
        this.setState({ places })
    })
  }
*/

/* The original css style names "App container", "row", "column column-75", "column column-25" */
  render() {
    //  <Sidebar places={this.state.places}/>
    /*<div className="map">
                    <MapContainer pos={this.state.pos} searchTerm={this.state.searchTerm} />
                    </div>*/
    return (

      <div className="fullContainer">
        <HeaderContainer handleLocationChange={this.handleLocationChange} {...this.state}/>
          <div className="contentContainer">
              <div className="searchContainer">
              <Search submit={this.handleSubmit} input={this.handleChange} />
              </div>
              <div className="mapContainer">

                    <div className="mapDescription">
                    The Description
                    </div>
                    <div className="mapPlaces">
                    <Container pos={this.state.pos} {...this.state} />
                    </div>
               </div>
           </div>
           <div className="footer"> footer </div>

      </div>
    );
  }
}

export default App;
