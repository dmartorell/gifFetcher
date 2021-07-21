import React, { useState } from 'react';
import defaultImg from '../assets/default-img.png';
import useGif from './useGif';

const Tag = () => {
  const [tag, setTag] = useState('elephant');
  const [gif, fetchGif] = useGif(tag);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchGif(tag);
  };

  return (
    <div className="column-container">
      <h1>
        random
        {' '}
        {tag}
        {' '}
        gif
      </h1>
      <img style={{ objectFit: 'contain' }} src={gif || defaultImg} alt="random gif" width="450" height="450" />
      <br />
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => { setTag(e.target.value); }} />
      </form>
      <button type="button" onClick={() => fetchGif(tag)}>New Gif</button>
    </div>
  );
};

export default Tag;
