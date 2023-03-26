import { useEffect } from 'react';
import { Layout } from 'antd';
import { Route, Routes } from 'react-router-dom';

import { useAppDispatch } from './hooks/reduxHooks';
import { fetchCountries } from './features/countriesSlice';
import {
  Header, Sidebar, Home, CountryNews, Page404,
} from './components';
import './App.css';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const promise = dispatch(fetchCountries());
    return () => {
      promise.abort();
    };
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <main className="main">
        <Sidebar />
        <Layout>
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/country/:countryId" element={<CountryNews />}/>
              <Route path="*" element={<Page404 />} />
            </Routes>
          </div>
        </Layout>
      </main>
    </div>
  );
}

export default App;
