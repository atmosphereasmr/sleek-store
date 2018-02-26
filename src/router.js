import React from "react";
import { Switch, Route } from "react-router-dom";

import Shop from './Components/Shop/shop.js'
import MensBoots from './Components/MensBoots/mensboots.js'
import WomensShoes from './Components/WomensShoes/womensshoes.js'
import WomensBoots from './Components/WomensBoots/womensboots.js'
import WomensHeels from './Components/WomensHeels/womensheels.js'
import FeaturedOne from './Components/Featured/featuredOne.js'
import FeaturedTwo from './Components/Featured/featuredTwo.js'
import FeaturedThree from './Components/Featured/featuredThree.js'
import About from './Components/About/about.js'

export default (
    <Switch>
    <Route path="/" exact component={Shop}/>
    <Route path="/mens-boots" component={MensBoots} />
    <Route path="/womens-shoes" component={WomensShoes} />
    <Route path="/womens-boots" component={WomensBoots} />
    <Route path="/womens-heels" component={WomensHeels} />
    <Route path="/featured-item-one" component={FeaturedOne} />
    <Route path="/featured-item-two" component={FeaturedTwo} />
    <Route path="/featured-item-three" component={FeaturedThree} />
    <Route path="/about" component={About} />
    </Switch>
)