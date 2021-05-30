import React from 'react';
import {Switch,Route} from "react-router-dom";
import './App.css';

import Home from "./Components/Home"
import Beers from "./Components/Beers"
import Random from "./Components/Random"
import CreateBeer from "./Components/CreateBeer"

import BeerDetails from "./Components/BeerDetails"

function App() {
  return (
    <div className="App">
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/beers" component={Beers}/>
       <Route exact path="/random-beer" component={Random}/>
       <Route exact path="/create-a-beer" component={CreateBeer}/>

       <Route
          exact
          path="/beer/:beerId"
          component={BeerDetails}
        />

     </Switch>
    </div>
  );
}

export default App;
