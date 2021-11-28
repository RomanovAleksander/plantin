import articleImg from '../../../assets/main/new_article_image.png';
import styles from './NewArticle.module.scss';

const NewArticle = () => {
  return (
    <article className={styles.container}>
      <div className={styles.badge}>New</div>
      <div className={styles.article}>
        <div className={styles.preview}>
          <img src={articleImg} alt='preview' />
        </div>
        <div className={styles.information}>
          <div className={styles.dateTime}>
            Feb 23 · 8 min read
          </div>
          <div className={styles.title}>Tips & Tricks For Cutting</div>
          <div className={styles.text}>
            Pruning, like any other skill, requires knowing what you are doing
            to achieve success. The old idea that anyone with a chain saw or a
            pruning saw can be a landscape pruner is far from the truth. More
            trees are killed or ruined each year from improper pruning than by
            pests. Remember that pruning is the removal or...
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewArticle;
