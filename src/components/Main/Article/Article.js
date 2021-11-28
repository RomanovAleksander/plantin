const Article = ({ article, styles, setImage }) => {
  const { date, time, title, description } = article;

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

export default Article;
