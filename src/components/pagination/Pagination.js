import React from 'react';
import './Pagination.css';

const Pagination = (props) => {
    if (!props.hasNext) return null;
    return (
        <div className="tweets">
            <div className="tweet">        
                <button className="next-tweets" onClick={ props.getNextTweets } >
                    Next 
                </button>
            </div>
        </div>
    );
}

export default Pagination;