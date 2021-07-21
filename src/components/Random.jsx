import React from 'react';
import defaultImg from '../assets/default-img.png';
import useGif from './useGif';

const Random = () => {
  const [gif, fetchGif] = useGif();

  return (
    <div className="column-container">
      <h1>random gif</h1>
      <img style={{ objectFit: 'contain' }} src={gif || defaultImg} alt="random gif" width="450" height="450" />
      <br />
      <button type="button" onClick={fetchGif}>New Gif</button>
    </div>
  );
};

export default Random;
