import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Search } from './components/search'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="main-title">
          ERC20 Token Hex Values
        </div>
        <div className="description">
          A list of Hex color codes representing the primary <br />
          branding color of top ERC20 token projects.
        </div>
        <div className="search-bar-container">
        <Search className='search-bar' />
        </div>
      </header>
    </div>
  );
}

export default App;
