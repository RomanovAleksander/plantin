import InfiniteScroll from 'react-infinite-scroll-component';
import InterestingArticle from './InterestingArticle/InterestingArticle';
import Preview from '../Preview/Preview';
import styles from './InterestingArticles.module.scss';

const style = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  width: '100%',
  overflow: 'hidden'
};

const TopArticles = ({ articles, fetchArticles, hasMore }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>Interesting</div>
      <div className={styles.articles}>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchArticles}
          hasMore={hasMore}
          loader={<Preview />}
          style={style}
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
        {articles.length === 0 && <div className={styles.message}>No results were found.</div>}
      </div>
    </div>
  );
};

export default TopArticles;
