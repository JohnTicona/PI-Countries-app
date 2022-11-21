import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.content} container`}>
        <Link to='/countries'>
          <h1 className={styles.title}>COUNTRIES - APP</h1>
        </Link>
        <Link to='/countries/activities'>
          <h3 className='btn btn-secondary bold'>Create Activity</h3>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
