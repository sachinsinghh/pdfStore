import React from 'react';
import Layout from './components/Layout';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import MainContent from './components/MainContent/MainContent';
import Navigation from './components/Navigation/Navigation';


function App() {
  return (
    <div>
      <Layout>
       <Header />
       <MainContent>
         <Menu />
         <Navigation />
       </MainContent>
      </Layout>
    </div>
  );
}

export default App;
