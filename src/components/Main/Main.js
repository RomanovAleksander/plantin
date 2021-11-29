import React, {useEffect, useState} from 'react';
import data from '../../data/data.json';
import Search from './Search/Search';
import NewArticle from './NewArticle/NewArticle';
import TopArticles from './TopArticles/TopArticles';
import InterestingArticles from './InterestingArticles/InterestingArticles';
import { getNextPageItems } from '../../utils/articles';
import arrow from '../../assets/main/chevron_left.svg';
import styles from './Main.module.scss';

const mockedArticles = data.interesting;
const articlesPerPage = 3;

const Main = () => {
  const [searchValue, setSearchValue] = useState('');
  const [articles, setArticles] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const currentPage = articles.length / articlesPerPage;

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

  const fetchArticles = () => {
    const nextArticles = getNextPageItems(mockedArticles, currentPage, articlesPerPage);
    setIsFetching(true);
    setTimeout(() => {
      setArticles((prev) => [...prev, ...nextArticles]);
      setIsFetching(false)
    }, 600);
  }

  useEffect(() => {
    fetchArticles();
  }, [])

  const filteredArticles = filterArticles(articles, searchValue);
  const hasMore = articles.length < mockedArticles.length;
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
      <InterestingArticles articles={filteredArticles}
                           fetchArticles={fetchArticles}
                           hasMore={hasMore}
                           isFetching={isFetching}
      />
    </main>
  );
};

export default Main;
