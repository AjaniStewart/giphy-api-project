import React, {Component} from 'react';
//import logo from './logo.svg';
//import SearchField from "./components/SearchField/SearchField";
//import GifCard from "./components/GifCard/GifCard";
import GifApp from "./components/GifApp/GifApp"
import './App.css';

class App extends Component {
  render () {
    return (
        <div className="App">
          <header className="App-header">
            <div><h2>Giphy</h2></div>
          </header>
          <GifApp/>
        </div>
    );
  }
    
  
}

export default App;
