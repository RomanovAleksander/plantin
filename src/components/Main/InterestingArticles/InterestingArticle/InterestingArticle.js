import Article from '../../Article/Article';
import Promo from '../../Promo/Promo';
import articleImage1 from "../../../../assets/main/int_article_image_1.png";
import articleImage2 from "../../../../assets/main/int_article_image_2.png";
import articleImage3 from "../../../../assets/main/int_article_image_3.png";
import styles from './InterestingArticle.module.scss';

const InterestingArticle = ({ article, idx }) => {
  const { image } = article;

  const setImage = () => {
    if (image === 'int_article_image_1') return articleImage1;
    else if (image === 'int_article_image_2') return articleImage2;
    else if (image === 'int_article_image_3') return articleImage3;
    else return articleImage1;
  }

  return (
    <>
      <Article article={article} styles={styles} setImage={setImage} />
      {idx === 5 && <Promo />}
    </>
  );
};

export default InterestingArticle;
