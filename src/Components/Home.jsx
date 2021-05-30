import React, { Component } from 'react';
import imgBeers from './../assets/beers.png';
import imgRandomBeer from './../assets/random-beer.png';
import imgNewBeer from './../assets/new-beer.png';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="category-container">
          <img className="category" src={imgBeers} alt="beers" />
          <Link exact to="/beers">
            <h2>All our beers</h2>
          </Link>
          <p className="category-parag">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            labore suscipit quidem, amet ad architecto excepturi nihil eum! In,
            eius recusandae rerum magni cupiditate nostrum officia consectetur
            ducimus blanditiis labore.
          </p>
        </div>
        <div className="category-container">
          <img className="category" src={imgRandomBeer} alt="beers" />
          <Link exact to="/random-beer">
            <h2>Get a random beer</h2>
          </Link>
          <p className="category-parag">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            labore suscipit quidem, amet ad architecto excepturi nihil eum! In,
            eius recusandae rerum magni cupiditate nostrum officia consectetur
            ducimus blanditiis labore.
          </p>
        </div>
        <div className="category-container">
          <img className="category" src={imgNewBeer} alt="beers" />
          <Link exact to="/create-a-beer">
          <h2>Create a new beer</h2></Link>
          <p className="category-parag">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            labore suscipit quidem, amet ad architecto excepturi nihil eum! In,
            eius recusandae rerum magni cupiditate nostrum officia consectetur
            ducimus blanditiis labore.
          </p>
        </div>
      </div>
    );
  }
}
