import React from 'react';
import Tag from './components/Tag';
import Random from './components/Random';
import './app.scss';

const App = () => (
  <div className="container">
    <h1>Fetch Gif App</h1>
    <Random />
    <Tag />
  </div>
);
export default App;
