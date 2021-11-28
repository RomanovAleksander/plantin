import React, { useState, useEffect, useCallback } from 'react';
import data from '../../data/data.json';
import Search from './Search/Search';
import NewArticle from './NewArticle/NewArticle';
import TopArticles from './TopArticles/TopArticles';
import InterestingArticles from './InterestingArticles/InterestingArticles';
import arrow from '../../assets/main/chevron_left.svg';
import styles from './Main.module.scss';

const interestingArticles = data.interesting;

const Main = () => {
  const [searchValue, setSearchValue] = useState('');
  const [articles, setArticles] = useState([]);

  const onSearchChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
  }

  const filterArticles = (items, query) => {
    if (query === 0) return items;

    return items.filter(item => {
      return item.title.toLowerCase().indexOf(query.toLowerCase()) > -1;
    });
  }

  const getArticles = () => {
    setTimeout(() => {
      setArticles((prev) => [...prev, ...interestingArticles]);
    }, 1500);
  };

  useEffect(() => {
    getArticles()
  }, [])

  const filteredArticles = filterArticles(articles, searchValue);
  return (
    <main className={styles.wrapper}>
      <aside className={styles.navLinks}>
        <a href="#">Home</a>
        <img src={arrow} alt="" />
        <a href="#">Blog</a>
        <img src={arrow} alt="" />
      </aside>
      <Search searchValue={searchValue} handleChange={onSearchChange} />
      {!searchValue && <> <NewArticle /> <TopArticles /> </> }
      <InterestingArticles articles={filteredArticles} />
    </main>
  );
};

export default Main;
