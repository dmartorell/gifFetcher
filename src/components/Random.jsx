import React, { useEffect, useState } from 'react';
import axios from 'axios';
import defaultImg from '../assets/default-img.png';

const Random = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const url = `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const [gif, setGif] = useState();

  const fetchGif = async () => {
    try {
      const { data } = await axios.get(url);
      const imgSrc = data.data.images.downsized_large.url;
      setGif(imgSrc);
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    fetchGif();
  }, []);

  const handleClick = () => {
    setGif();
    fetchGif();
  };

  return (
    <div className="column-container">
      <h1>random gif</h1>
      <img style={{ objectFit: 'contain' }} src={gif || defaultImg} alt="random gif" width="450" height="450" />
      <br />
      <button type="button" onClick={handleClick}>New Gif</button>
    </div>
  );
};

export default Random;
