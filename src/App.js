import React from 'react';
import Layout from './components/Layout';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import MainContent from './components/MainContent/MainContent';
import Navigation from './components/Navigation/Navigation';
import LeftContent from './components/LeftContent/LeftContent';


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
      </Layout>
    </div>
  );
}

export default App;
