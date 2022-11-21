import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Layout from './components/Layout/Layout';
import ActivitiesScreen from './pages/ActivitiesScreen';
import CountriesScreen from './pages/CountriesScreen';
import CountryScreen from './pages/CountryScreen';
import LandingScreen from './pages/LandingScreen';

import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
