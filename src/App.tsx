import { Layout } from 'antd';
import { Route, Routes } from 'react-router-dom';

import {
  Header, Sidebar, Home, CountryNews, Page404, Footer,
} from './components';
import { COUNTRIES, AVAILABLE_COUNTRIES } from './assets';
import './App.css';

function App() {
  // eslint-disable-next-line max-len
  const countries = COUNTRIES.filter((country) => AVAILABLE_COUNTRIES.includes(country.code.toLowerCase()));

  return (
    <div className="App">
      <Header />
      <main className="main">
        <Sidebar countries={countries} />
        <Layout>
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/country/:countryId" element={<CountryNews />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </div>
          <Footer />
        </Layout>
      </main>
    </div>
  );
}

export default App;
