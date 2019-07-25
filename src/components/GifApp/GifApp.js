import React, {Component} from 'react'
import axios from 'axios'
import GifCard from '../GifCard/GifCard'

class GifApp extends Component {
  constructor(props) {
    super(props);
    this.state ={
      data: null
    }
    this.fetchGifData = this.fetchGifData.bind(this);
  }

  componentDidMount() {
    this.fetchGifData("trending");
  }


  async fetchGifData(term, searchTerm) {
    if (term === undefined) {
      term = this.props.term;
      searchTerm = this.props.searchTerm;
    }

    try {
      let url = 'http://api.giphy.com/v1/gifs/' + term + '?api_key=LgtNkTTMlSnTMNsRZvRxkY4og7ExPyhM';
      if (term === "search") {
        url += '&q=' + searchTerm;
      }
      console.log(url)
      let { data } = await axios.get(url);
      console.log(data);
      this.setState({data: data});
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const data = this.state.data;
    if (data !== null) {
      console.log("GifCard:",data)
    return (
      <GifCard data={data}/>
    );
    } else {
      return null;
    }
  }
}

export default GifApp;
