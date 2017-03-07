import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBM5fD8Lrtq2S6kKHZ8nts6W8J2qJ01KNU';

const App = () => {
    return (
      <div>
        <SearchBar />
      </div>
    );
};

ReactDOM.render(<App />, document.querySelector('.container'));
