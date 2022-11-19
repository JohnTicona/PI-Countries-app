import { useNavigate } from 'react-router-dom';

const LandingScreen = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Landing Page</h1>
      <button className='btn btn-primary' onClick={() => navigate('countries')}>
        Home
      </button>
    </div>
  );
};

export default LandingScreen;
