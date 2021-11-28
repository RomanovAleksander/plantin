import data from '../../../data/data.json';
import articleImage from '../../../assets/main/new_article_image.png';
import styles from './NewArticle.module.scss';

const NewArticle = () => {
  const { date, time, title, description } = data.new[0];

  return (
    <article className={styles.container}>
      <div className={styles.badge}>New</div>
      <article className={styles.article}>
        <div className={styles.preview}>
          <img src={articleImage} alt='preview' />
        </div>
        <div className={styles.information}>
          <div className={styles.dateTime}>
            {date} · {time}
          </div>
          <div className={styles.title}>{title}</div>
          <div className={styles.text}>{description}</div>
        </div>
      </article>
    </article>
  );
};

export default NewArticle;
