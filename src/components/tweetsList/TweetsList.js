import React from 'react';
import TweetItem from '../tweetItem/TweetItem';

const TweetsList = ({ tweets }) => {
    const renderedList = tweets.map((tweet, index) => {
        return <TweetItem key={ `${index}${tweet.id}` } tweet={ tweet }/>;
    });

    return(
        <div>
            <div>{ renderedList }</div>
        </div>
    );
};

export default TweetsList;