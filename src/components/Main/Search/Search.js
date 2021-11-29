import React, { useState, useCallback, useEffect } from 'react';
import { useHttp } from '../../../hooks/http.hook';
import { apiUrl, apiKey } from '../../../utils/consts';
import backgroundImg from '../../../assets/main/s_image.svg';
import styles from './Search.module.scss';

const Search = ({ searchValue, handleChange }) => {
  const [temperature, setTemperature] = useState(null);
  const [isCoords, setIsCoords] = useState(false);
  const [latitude, setLatitude] = useState(false);
  const [longitude, setLongitude] = useState(false);
  const { request, loading } = useHttp();

  const getTemperature = useCallback(async (coords) => {
    try {
      const url = `${apiUrl}${coords}&units=metric&appid=${apiKey}`;
      const data = await request(url);
      const celsius = Math.floor(data.main.temp);

      setTemperature(celsius);
    } catch (e) {}
  }, [request, setTemperature]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      setIsCoords(true);
    })
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      getTemperature(`lat=${latitude}&lon=${longitude}`);
    } else {
      getTemperature('q=kyiv');
    }
  }, [isCoords]);

  return (
    <div className={styles.searchContainer}>
      <div className={styles.title}>Stay always tuned with planting trends</div>
      <span className={styles.temperature}>Current temperature is: {!loading ? temperature : '0'}°C</span>
      <span className={styles.text}><b>Tips & Tricks</b> selected specially for <b>you!</b></span>
      <div>
        <input
          value={searchValue}
          onChange={(event) => handleChange(event)}
          type="text"
          placeholder="Search"
          id="search"
        />
      </div>
      <img src={backgroundImg} alt="background" className={styles.backgroundImg} />
    </div>
  );
};

export default Search;
