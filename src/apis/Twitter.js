import axios from 'axios';

export const getTweets = (params, next) => {
    let url = `http://localhost:3002/getTweets?${params}`;
    url = next !== '' ? `${url}&next=${encodeURIComponent(next)}` : url;
    
    console.log('URL: ', url);
    
    return axios.get(url);
  }