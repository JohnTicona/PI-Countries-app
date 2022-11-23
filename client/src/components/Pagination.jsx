import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../redux/actions';
import style from './Pagination.module.css';

const Pagination = ({ totalPosts, postsPerPage }) => {
  const currentPage = useSelector(state => state.currentPage);
  const dispatch = useDispatch();

  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className={style.pagination}>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => dispatch(setCurrentPage(page))}
            className={page === currentPage ? style.active : ''}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
