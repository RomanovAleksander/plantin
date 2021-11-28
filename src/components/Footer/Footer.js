import line from '../../assets/footer/divineLine.svg';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href="#">Terms of Service</a>
        <img src={line} alt="line"/>
        <a href="#">Privacy Policy</a>
        <img src={line} alt="line"/>
        <a href="#">Subscription Policy</a>
      </div>
      <div className={styles.copyright}>©Copyright  © 2020 PlantIn. All rights reserved</div>
    </footer>
  );
};

export default Footer;