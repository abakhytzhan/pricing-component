import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>Simple, traffic-based pricing</div>
      <div className={styles.subtitle}>
        <span>Sign-up for our 30-day trial.</span>
        <span>No credit card required.</span>
      </div>
      <div className={styles.bigCircle}></div>
      <div className={styles.smallCircle}></div>
    </div>
  );
};

export default Header;
