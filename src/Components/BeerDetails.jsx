import React from "react";
import axios from "axios";

class BeerDetails extends React.Component {
  state = {
    beer: {},
  };

  componentDidMount() {

    const id = this.props.match.params.beerId;
    axios.get('https://ih-beers-api2.herokuapp.com/beers/'+ id)
    .then((res) => {
      console.log("all good" + res.data);
      this.setState({
        beer: res.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    // if (this.state.pokemon === null) {
    //   return <div>Loading...</div>;
    // }

    // Same as above

    // if (this.state.beer) {
    //   return <div>Loading done...</div>;
    // }

    return (
      <div className="detail" >
        {/* <pre>{JSON.stringify(props, null, 4)}</pre> */}
      
        <img className="beer-size" src={this.state.beer.image_url} alt="beer"/>
        <h1>{this.state.beer.name}</h1>
        <h3>{this.state.beer.tagline}</h3>
        <p>{this.state.beer.first_brewed}</p>
        <p>{this.state.beer.attenuation_level}</p>
        <p className="category-parag">{this.state.beer.description}</p>
        <p>{this.state.beer.contributed_by}</p>
        {/* <h3>Pokemon name{this.state.beer && this.state.beer.name}</h3>
        {this.state.beer && (
          <img src={this.state.beer.image} alt={this.state.beer.name} />
        )} */}
      </div>
    );
  }

}

export default BeerDetails;
