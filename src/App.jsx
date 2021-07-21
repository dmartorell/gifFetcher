import React from 'react';
import Tag from './components/Tag';
import Random from './components/Random';
import './app.scss';

const App = () => (
  <div className="column-container">
    <h1>Fetch Gif App</h1>
    <br />
    <div className="row-container">
      <Random />
      <Tag />
    </div>
  </div>
);
export default App;
