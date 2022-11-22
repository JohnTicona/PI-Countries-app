import style from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={style.spinner}>
      <div className='bounce1'></div>
      <div className='bounce2'></div>
      <div className='bounce3'></div>
    </div>
  );
};

export default Spinner;
