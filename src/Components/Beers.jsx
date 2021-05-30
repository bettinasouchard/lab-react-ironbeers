import axios from 'axios';
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Beers extends Component {
  state = {
    beers: [],

  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then((res) => {
      this.setState({
        beers: res.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    
    return this.state.beers.map((beer) => {
      return (
        
        <div className="beer-container">
            <img className="beer-size" src={beer.image_url} alt="" />
            <div className="beer-right-side">
            <h1>{beer.name}</h1>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
            <Link className="fat" to={`/beer/${beer._id}`}>{beer.name} </Link>
          </div>
        </div>
      );
    });
  }
}

export default Beers;
