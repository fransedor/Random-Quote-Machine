import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [link,setLink] = useState('');

  function getQuote() {
    const quote = fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      setText(data.content);
      setAuthor(data.author);
      setLink('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + data.content + '" ' + data.author))
    });

}
  useEffect(() => {
    getQuote();
  },[]);
  
  return (
    <div className="App">
      <div className="wrapper" id="quote-box">
        <p id="text">{text}</p>
        <p id="author">{author}</p>
        <div className="buttons">
          <a href={link} id="tweet-quote" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="Tweet" /></a>
          <button id="new-quote" onClick={getQuote}>New Quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
