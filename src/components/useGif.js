/* eslint-disable no-shadow */
import { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const url = `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

function useGif(tag) {
  const [gif, setGif] = useState();

  const fetchGif = async (tag) => {
    try {
      const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
      const imgSrc = data.data.images.downsized_large.url;
      setGif(imgSrc);
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    fetchGif(tag);
  }, [tag]);

  return [gif, fetchGif];
}
export default useGif;
