import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import ActivitiesScreen from './pages/ActivitiesScreen';
import CountriesScreen from './pages/CountriesScreen';
import CountryScreen from './pages/CountryScreen';
import LandingScreen from './pages/LandingScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingScreen />} />
        <Route path='/countries' element={<Layout />}>
          <Route index element={<CountriesScreen />} />
          <Route path=':id' element={<CountryScreen />} />
          <Route path='activities' element={<ActivitiesScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
