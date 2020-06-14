import React, { Component } from 'react';
import QuoteBox from './components/QuoteBox';
import colors from './utils/colors';
import quotes from './utils/quotes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "orchid",
      quote: { quote: "The most important thing about art is to work. Nothing else matters except sitting down every day and trying.", author: "Steven Pressfield" }
    };
  }

  componentDidMount() {
    // Set background color of page
    document.body.style.backgroundColor = this.state.color;
  }

  componentDidUpdate() {
    // Set background color of page on update
    // (This is necessary because the document body is outside of the react structure)
    document.body.style.backgroundColor = this.state.color;
  }

  // Returns NEW random quote object
  getNewRandomQuote = () => {
    // Random quote from the imported quotes array
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    // If random quote is not the current quote
    if (randomQuote.quote !== this.state.quote.quote) {
      // Return the new quote object
      return randomQuote;
      // Otherwise call the function again
    } else {
      return this.getNewRandomQuote();
    }
  }

  // Returns NEW random color
  getNewRandomColor = () => {
    // Random color from the imported colors array
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    // If random color is not the current color
    if (randomColor !== this.state.color) {
      // Return the new random color
      return randomColor;
      // Otherwise call the function again
    } else {
      return this.getNewRandomColor();
    }
  }

  // Sets a new random quote and color
  newQuoteAndColor = () => {
    this.setState({
      color: this.getNewRandomColor(),
      quote: this.getNewRandomQuote()
    });
  }

  render() {
    return (
      <div className="App">
        <QuoteBox
          color={this.state.color}
          quote={this.state.quote}
          newQuoteAndColor={this.newQuoteAndColor}
        />
      </div>
    );
  }
}

export default App;
