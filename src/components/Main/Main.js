import React from 'react';
import Search from './Search/Search';
import NewArticle from './NewArticle/NewArticle';
import TopArticles from './TopArticles/TopArticles';
import InterestingArticles from './InterestingArticles/InterestingArticles';
import arrow from "../../assets/main/chevron_left.svg";
import styles from './Main.module.scss';

const Main = () => {
  return (
    <main className={styles.wrapper}>
      <aside className={styles.navLinks}>
        <a href="#">Home</a>
        <img src={arrow} alt="Logo PlantIn" />
        <a href="#">Blog</a>
        <img src={arrow} alt="Logo PlantIn" />
      </aside>
      <Search />
      <NewArticle />
      <TopArticles />
      <InterestingArticles />
    </main>
  );
};

export default Main;
