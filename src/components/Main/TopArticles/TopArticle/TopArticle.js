import articleImage1 from '../../../../assets/main/top_article_image_1.png';
import articleImage2 from '../../../../assets/main/top_article_image_2.png';
import styles from "./TopArticle.module.scss";

const TopArticle = ({ article }) => {
  const { image, date, time, title, description } = article;

  const setImage = () => {
    if (image === 'top_article_image_1') return articleImage1;
    else if (image === 'top_article_image_2') return articleImage2;
    else return articleImage1;
  }

  return (
    <article className={styles.article}>
      <div className={styles.preview}>
        <img src={setImage()} alt='preview' />
      </div>
      <div className={styles.dateTime}>
        {date} · {time}
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{description}</div>
    </article>
  );
};

export default TopArticle;
