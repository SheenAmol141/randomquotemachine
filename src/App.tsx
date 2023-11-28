import { useState } from 'react'
import './App.css'
import quotes from "./assets/quotes.json";
import {FaTwitter, FaQuoteLeft, FaQuoteRight} from "react-icons/fa";



interface Quote {
  quote: string;
  author: string;
}



const getRandomQuote = (): Quote => {
  let i = Math.floor(Math.random() * quotes.length);
return quotes[i];
}




function App() { 
  const [quote, setQuote] = useState<Quote>(getRandomQuote());

const click = () => {
  setQuote(getRandomQuote());
};
  return <div className='parent'>
    <div id="underprnt">
     <div id="quote-box">
        <FaQuoteLeft size="30"  color="black" style={{marginRight: "10px"}} />
        <h3 id="text">{quote.quote}</h3>
        <div id='right'>
        <FaQuoteRight size="30" color="black" style={{marginLeft: "10px"}} /></div>
        <h4 id="author">{quote.author}</h4>
        <div className="social">
          <a href="twitter.com/intent/tweet" id="tweet-quote"> <FaTwitter color="black" size="30px" /> </a>
          <button id="new-quote" onClick={click}>Click for a new Quote</button>
        </div>
        
        </div>
      </div>
    </div>;

}

export default App
