import data from '../../../data/data.json';
import TopArticle from './TopArticle/TopArticle';
import styles from './TopArticles.module.scss';

const TopArticles = () => {
  const articles = data.top;
  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>Top of the Day</div>
      <div className={styles.articles}>
        {articles.map((article) => {
          return <TopArticle article={article} key={article.id} />
        })}
      </div>
    </div>
  );
};

export default TopArticles;
