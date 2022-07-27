import React from 'react';
import './App.scss';

import { Header } from './components/Header';
import { ListItems } from './components/ListItems';

function App() {
  return (
    <div className='container'>
      <Header />
      <main>
        <ListItems />
        {/* <div className="card" style={{width: '500px'}}>
          <img src='https://picsum.photos/500' alt="Card" />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div> */}
      </main>
    </div>
  );
}

export default App;
