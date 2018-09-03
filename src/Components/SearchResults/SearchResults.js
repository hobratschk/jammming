import React, { Component } from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList.js';

class SearchResults extends Component {
    render() {
        return (
            <div className="SearchResults">
            <h2>Results</h2>
            {/* <!-- Add a TrackList component --> */}
            <TrackList tracks={this.props.searchResults}/>
            </div>
        )
    }
}

export default SearchResults;