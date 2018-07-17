import React, { Component } from 'react';
import './App.css';
import NavigationView from './components/navigation-view';
import cube from './icons/cube.svg';
import bookmark from './icons/bookmark.svg';
import diamond from './icons/diamond-outlined-shape.svg';
import network from './icons/network.svg';
import star from './icons/star.svg';

import lightcube from './icons/cube(1).svg';
import lightbookmark from './icons/bookmark(1).svg';
import lightdiamond from './icons/diamond-outlined-shape(1).svg';
import lightnetwork from './icons/network(1).svg';
import lightstar from './icons/star(1).svg';



const items = [
  {
    darkicon:cube,
    lighticon:lightcube,
    text:'item1',
    handler:()=>{console.log('hello from 1')}
  },
  {
    darkicon:bookmark,
    lighticon:lightbookmark,
    text:'item2',
    handler:()=>{console.log('hello from 2')}
  },
  {
    darkicon:diamond,
    lighticon:lightdiamond,
    text:'item3',
    handler:()=>{console.log('hello from 3')}
  },
  {
    darkicon:network,
    lighticon:lightnetwork,
    text:'item4',
    handler:()=>{console.log('hello from 4')}
  },
  {
    darkicon:star,
    lighticon:lightstar,
    text:'item5',
    handler:()=>{console.log('hello from 5')}
  },
];
const image = 'https://images.unsplash.com/photo-1452723312111-3a7d0db0e024?w=700';

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavigationView panewidth="160" background={image} items={items} theme="dark"/>
      </div>
    );
  }
}

export default App;
