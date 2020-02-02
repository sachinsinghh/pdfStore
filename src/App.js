import React from 'react';
import Layout from './components/Layout';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import MainContent from './components/MainContent/MainContent';
import Navigation from './components/Navigation/Navigation';
import LeftContent from './components/LeftContent/LeftContent';
import CenterContentLandingPage from './components/CenterContentLandingPage/CenterContentLandingPage';
import RightContent from './components/RightContent/RightContent';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <div>
      <Layout>
       <Header />
       <MainContent>
         <Menu />
         <Navigation />
       </MainContent>
       <LeftContent />
       {/* <ProductDetail /> */}
        <CenterContentLandingPage />
        <RightContent />
      </Layout>
    </div>
  );
}

export default App;
