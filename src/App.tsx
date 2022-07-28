import React from 'react';
import './App.scss';

import { Header } from './components/Header';
import { ListItems } from './components/ListItems';

function App() {
  return (
    <div className='container app'>
      <Header />
      <main>
        <ListItems />
      </main>
    </div>
  );
}

export default App;
