import preview from '../../../assets/main/article_preview_skeleton.png';
import styles from './Preview.module.scss';

const Preview = () => {
  return (
    <div className={styles.container}>
      <div className={styles.preview}>
        <img src={preview} alt="preview" />
      </div>
      <div className={styles.preview}>
        <img src={preview} alt="preview" />
      </div>
      <div className={styles.preview}>
        <img src={preview} alt="preview" />
      </div>
    </div>
  );
};

export default Preview;
