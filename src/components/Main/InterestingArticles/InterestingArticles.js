import InterestingArticle from './InterestingArticle/InterestingArticle';
import styles from './InterestingArticles.module.scss';

const TopArticles = ({ articles }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>Interesting</div>
      <div className={styles.articles}>
        {articles.map((article, idx) => {
          return <InterestingArticle article={article} key={article.id} idx={idx} />
        })}
      </div>
    </div>
  );
};

export default TopArticles;
