import React, { Component } from 'react';
// import background_photo_desktop from './background_photo_desktop.jpg';
import './App.css';
import Playlist from '../Playlist/Playlist.js';
import SearchResults from '../SearchResults/SearchResults.js';
import SearchBar from '../SearchBar/SearchBar.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {id: 1, name: 'Song 1', artist: 'Artist 1', album: 'Album 1'},
        {id: 2, name: 'Song 2', artist: 'Artist 2', album: 'Album 2'},
        {id: 3, name: 'Song 3', artist: 'Artist 3', album: 'Album 3'}
      ]
    }
  }

  render() {
    return(
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        {/* <!-- Add a SearchBar component --> */}
        <SearchBar />
        <div className="App-playlist">
          {/* <!-- Add a SearchResults component -->
          <!-- Add a Playlist component --> */}
          <SearchResults searchResults={this.state.searchResults}/>
          <Playlist />
        </div>
      </div>
    </div>
    )}
}

export default App;
