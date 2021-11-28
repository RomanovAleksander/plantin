import logo from '../../../assets/logo.svg';
import promo from '../../../assets/main/promo.svg';
import styles from './Promo.module.scss';

const Promo = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo" />
      <div className={styles.title}>Get unlimited access to exclusive articles</div>
      <div className={styles.text}>Get rid of limits and read everything you wish</div>
      <button className={styles.btn}>Try For Free</button>
      <img src={promo} alt="promo" className={styles.promoImage} />
    </div>
  );
};

export default Promo;
