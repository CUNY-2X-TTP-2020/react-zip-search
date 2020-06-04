import React from 'react';
import './App.css';

import ZipCode from './components/ZipCode';

function App() 
{
    return (
        <div className="App">
            <header className="App-header">
                <h1>Zip Code Search</h1>
                <ZipCode zipCode={10016} />
            </header>
        </div>
    );
}

export default App;