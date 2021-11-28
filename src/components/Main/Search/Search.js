import React, { useState } from 'react';
import styles from './Search.module.scss';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className={styles.searchContainer}>
      <div className={styles.title}>Stay always tuned with planting trends</div>
      <span className={styles.temperature}>Current temperature is: 24°C</span>
      <div>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Search;
