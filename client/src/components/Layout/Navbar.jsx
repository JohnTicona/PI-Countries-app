import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.content} container`}>
        <Link to='/countries'>
          <h1 className={styles.title}>Countries</h1>
        </Link>
        <Link to='/countries'>
          <h1 className={styles.title}>Countries</h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
