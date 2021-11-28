import Article from '../../Article/Article';
import articleImage1 from '../../../../assets/main/top_article_image_1.png';
import articleImage2 from '../../../../assets/main/top_article_image_2.png';
import styles from "./TopArticle.module.scss";

const TopArticle = ({ article }) => {
  const { image } = article;

  const setImage = () => {
    if (image === 'top_article_image_1') return articleImage1;
    else if (image === 'top_article_image_2') return articleImage2;
    else return articleImage1;
  }

  return (
    <Article article={article} styles={styles} setImage={setImage} />
  );
};

export default TopArticle;
