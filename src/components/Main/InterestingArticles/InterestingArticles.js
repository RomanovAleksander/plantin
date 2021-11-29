import InfiniteScroll from 'react-infinite-scroll-component';
import { useMediaQuery } from '../../../hooks/media.hook';
import InterestingArticle from './InterestingArticle/InterestingArticle';
import Preview from '../Preview/Preview';
import styles from './InterestingArticles.module.scss';

const style = (isRowBased) => ({
  display: 'flex',
  flexDirection: `${isRowBased ? 'row' : 'column'}`,
  justifyContent: `${isRowBased ? 'space-between' : 'center'}`,
  flexWrap: 'wrap',
  width: '100%',
  overflow: 'visible'
});

const TopArticles = ({ articles, fetchArticles, hasMore, isFetching }) => {
  const isRowBased = useMediaQuery('(min-width: 570px)');

  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>Interesting</div>
      <div className={styles.articles}>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchArticles}
          hasMore={hasMore}
          style={style(isRowBased)}
        >
          {articles.map((article, idx) => {
            return <InterestingArticle article={article}
                                       key={article.id}
                                       idx={idx}
                                       fetchArticles={fetchArticles}
                                       hasMore={hasMore}
            />
          })}
        </InfiniteScroll>
        {isFetching && <Preview />}
        {(articles.length === 0 && !isFetching) && <div className={styles.message}>No results were found.</div>}
      </div>
    </div>
  );
};

export default TopArticles;
