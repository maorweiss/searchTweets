import React, { Component } from 'react';
import './App.css';
import TweetsList from '../tweetsList/TweetsList';
import Pagination from '../pagination/Pagination';
import * as twitter from '../../apis/Twitter';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      tweets: [],
      next: ''
    };

    this.queryParams = {
      query: 'Tapingo',
      maxResults: 20,  // Range 10-500, with a default of 100. 
    };
  
    this.paramsString = Object.keys(this.queryParams).map(
      key => key + '=' + encodeURIComponent(this.queryParams[key])).join('&');
  }

  render() {
    return (
      <div className="App">
        <h1 className="header">{ this.queryParams.query } <img className="icon" alt='' src='./favicon.ico' /> tweets</h1>
        <TweetsList tweets={ this.state.tweets }/>
        <Pagination getNextTweets={ this.getTweets } hasNext={ !!this.state.next } />        
      </div>
    );
  }

  componentDidMount() {
      this.getTweets();
  };

  getTweets = () => {
    twitter.getTweets(this.paramsString, this.state.next).then(response => this.setState({ 
      tweets: response.data.results,
      next: response.data.next
     }));
    (window).scrollTo(0, 0)
  }  
}

export default App;
