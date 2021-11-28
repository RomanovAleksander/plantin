import styles from './InterestingArticle.module.scss';
import articleImage1 from "../../../../assets/main/int_article_image_1.png";
import articleImage2 from "../../../../assets/main/int_article_image_2.png";
import articleImage3 from "../../../../assets/main/int_article_image_3.png";
import Promo from "../../Promo/Promo";

const InterestingArticle = ({ article, idx }) => {
  const { image, date, time, title, description } = article;

  const setImage = () => {
    if (image === 'int_article_image_1') return articleImage1;
    else if (image === 'int_article_image_2') return articleImage2;
    else if (image === 'int_article_image_3') return articleImage3;
    else return articleImage1;
  }

  return (
    <>
      <article className={styles.article}>
        <img src={setImage()} alt='preview' />
        <div className={styles.dateTime}>
          {date} · {time}
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{description}</div>
      </article>
      {idx === 5 && <Promo />}
    </>
  );
};

export default InterestingArticle;
