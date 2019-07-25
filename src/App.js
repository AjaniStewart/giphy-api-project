import React, {Component} from 'react';
import logo from './logo.svg';
import SearchField from "./components/SearchField/SearchField";
import GifCard from "./components/GifCard/GifCard";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
        <div className="App">
          <header className="App-header">
              <h2>Giphy</h2>
          </header>
          <SearchField/>
        </div>
    );
  }
    
  
}

export default App;
