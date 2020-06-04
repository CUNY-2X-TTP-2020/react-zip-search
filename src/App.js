import React from 'react';
import './App.css';

import ZipCode from './components/ZipCode';
import SearchBar from './components/SearchBar';

function App() 
{
    return (
        <div className="App">
            <header className="App-header">
                <h1>Zip Code Search</h1>
                <SearchBar />
                <ZipCode zipCode={10016} />
                <ZipCode />
                <ZipCode zipCode={124124124} />
            </header>
        </div>
    );
}

export default App;