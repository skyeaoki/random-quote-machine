import React, { Component } from 'react';
import './QuoteBox.css';
import TweetButton from './TweetButton';

class QuoteBox extends Component {
    render() {
        const { quote: { quote, author }, color, newQuoteAndColor } = this.props;

        // The ids on the elements below are required to pass Free Code Camp tests
        return (
            <div id="quote-box" className="quote" >
                <p id="text" className="quote__text">"{quote}"</p>
                <p id="author" className="quote__author">- {author}</p>
                <div className="quote__buttons">
                    <TweetButton color={color} quote={quote} author={author} />
                    <button id="new-quote" className="quote__newBtn" onClick={newQuoteAndColor} style={{ background: color }}>New quote</button>
                </div>
            </div>
        );
    }
}

export default QuoteBox;