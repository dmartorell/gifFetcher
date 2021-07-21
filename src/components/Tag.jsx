import React, { useEffect, useState } from 'react';
import axios from 'axios';
import defaultImg from '../assets/default-img.png';

const Tag = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [gif, setGif] = useState();
  const [tag, setTag] = useState('elephant');
  const url = `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  const fetchGif = async (searchName) => {
    try {
      const { data } = await axios.get(`${url}&tag=${searchName}`);
      const imgSrc = data.data.images.downsized_large.url;
      setGif(imgSrc);
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    fetchGif(tag);
  }, [tag]);

  const handleClick = () => {
    setGif();
    fetchGif(tag);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGif();
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
      <button type="button" onClick={handleClick}>New Gif</button>
    </div>
  );
};

export default Tag;
