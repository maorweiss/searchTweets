import React from 'react';
import './TweetItem.css';

const TweetItem = ({tweet}) => {
    return (
        <div className="tweets">   
            <div className="tweet line">
                <div className="tweet-avatar">
                <img className="tweet-img" alt="" src={ tweet.user.profile_image_url } />
                </div>
                <div className="tweet-content">
                    <span className="tweet-author">{ tweet.user.name }</span>
                    <div className="tweet-metadata">
                        <span className="tweet-user">@{ tweet.user.screen_name }</span>
                        <span className="tweet-date">{ tweet.created_at.substring(4, 10) }</span>
                    </div>
                    <div className="tweet-text">
                        { tweet.text }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TweetItem;