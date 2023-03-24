import { Layout } from 'antd';

import { Route, Routes } from 'react-router-dom';

import {
  Header, Sidebar, Home, CountryNews, Page404,
} from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Sidebar />
        <Layout>
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/country/:countryId" element={<CountryNews />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </div>
        </Layout>
      </main>
    </div>
  );
}

export default App;
