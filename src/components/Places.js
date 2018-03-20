import React, { Component } from 'react';
import { Map, GoogleApiWrapper, } from 'google-maps-react';
import PlacesListItem from './PlacesListItem.js'

const  Listing = ({places}) => {
  console.log("in Listing");
  return (
    <ul>
      {places && places.map(p => {
        return (
          <PlacesListItem key={p.id} place={p} />
        )
      })}
    </ul>
  )
  }

class Container extends Component {
  constructor(props){
    super(props);
    this.state = {
      places: [],
      pos : this.props.pos
    }
   // console.log("constructor container pos :" + this.state.pos.lat);
  }

  onGoogleMapLoad = map => {
    this.map = map;
    //console.log("in Google Map Load in Container")
  }

  onMapReady = (mapProps, map) => {
    this.setState({map});
    //console.log('mapCenter : ' + map.center)
    //console.log('mapPropsCenter : ' + mapProps.mapCenter)
    this.searchText(map,map.center,this.props.searchTerm)
  }

  searchText = (map, center, query) => {
    const {google} = this.props
    const service = new google.maps.places.PlacesService(map)
    const myLoc = map.center;
    const request ={
      location: myLoc,
       radius: '500',
       query: query
    }
    console.log(" searchText center " + myLoc)
    service.textSearch(request,(results, status)=>{
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        this.setState({
          places: results,
          center: center,
        })
      }
    })
  }

  render(){
    if (!this.props.loaded || this.props.searchTerm.length==0 || !this.props.showContainer) {
      return <div>Loading...</div>
    }
    console.log("pos at render container : " + JSON.stringify(this.props.pos) + " which is " + this.props.pos)
    const {pos} = this.props;

    return (
      <Map
          ref={this.onGoogleMapLoad}
          google={this.props.google}
          zoom={15}
          initialCenter= {pos}
          center= {pos}
          onReady={this.onMapReady}
          visible={true}

          >
          <Listing places={this.state.places} {...this.state} />
      </Map>
    )
  }

}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GKEY),
  libraries: ['places'],
  version:'3.25'
})(Container)