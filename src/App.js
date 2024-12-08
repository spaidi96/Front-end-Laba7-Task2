import './App.css';
import React from 'react';
import GoodsCard from "./components/GoodsCard";
import Apple from './images/Apple.jpg'
import Orange from './images/Orange.jpg'
import Banana from './images/Banana.jpg'
import Pear from './images/Pear.jpg'
import Grapes from './images/Grapes.jpg'
import Strawberry from './images/Strawberry.jpg'

function App() {
  return (
    <div className="App">
      <GoodsCard name="Apple" cost="25 grn" image={Apple} />
        <GoodsCard name="Orange" cost="40 grn" image={Orange}/>
        <GoodsCard name="Banana" cost="45 grn" image={Banana}/>
        <GoodsCard name="Pear" cost="25 grn" image={Pear}/>
        <GoodsCard name="Grapes" cost="40 grn" image={Grapes}/>
        <GoodsCard name="Strawberry" cost="15 grn" image={Strawberry}/>
    </div>
  );
}

export default App;
