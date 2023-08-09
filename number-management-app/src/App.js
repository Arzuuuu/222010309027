import React, { useState } from 'react';
import axios from 'axios';
import NumberList from './NumberList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [numbers, setNumbers] = useState([]);

  const fetchNumbers = async (urls) => {
    try {
      const responses = await Promise.all(
        urls.map(async (url) => {
          try {
            const response = await axios.get(url, { timeout: 500 });
            return response.data.numbers;
          } catch (error) {
            console.error(`Error fetching ${url}:`, error);
            return [];
          }
        })
      );

      const mergedNumbers = responses
        .flat()
        .filter((number, index, self) => self.indexOf(number) === index)
        .sort((a, b) => a - b);

      setNumbers(mergedNumbers);
    } catch (error) {
      console.error('Error fetching numbers:', error);
    }
  };

  const handleFetch = (event) => {
    event.preventDefault();
    const urls = event.target.urls.value.split('\n').filter((url) => url.trim() !== '');
    fetchNumbers(urls);
  };

  return (
    <div className="container">
      <h1>Number Management Microservice</h1>
      <form onSubmit={handleFetch}>
        <div className="form-group">
          <label htmlFor="urls">Enter URLs (one per line)</label>
          <textarea className="form-control" id="urls" rows="4"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Fetch Numbers
        </button>
      </form>
      <NumberList numbers={numbers} />
    </div>
  );
}

export default App;
