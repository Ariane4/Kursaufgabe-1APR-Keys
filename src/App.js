import React from 'react';
import './App.css';
import SuperHeroList from './SuperHeroList'
// import FilmList from './FilmList';

function App() {
  return (
    <div className="App">
      <SuperHeroList Ariane={SuperHeroItems} />
      {/* <FilmList /> */}
    </div>
  );
}

const SuperHeroItems = [
  { urlImage: 'https://comicvine1.cbsistatic.com/uploads/scale_small/12/124259/7254202-wolv2020001_silva.jpg', id: 1, name: 'Wolverine', email: 'wolwerine@super.de' },
  { urlImage: 'https://comicvine1.cbsistatic.com/uploads/scale_small/10/104700/4831078-spider-man%201.jpg', id: 2, name: 'Spider-Man', email: 'spiderman@super.de' },
  { urlImage: 'https://comicvine1.cbsistatic.com/uploads/scale_small/11139/111399535/7231595-thor2020005-cvr.jpg', id: 3, name: 'Thor', email: 'thor@super.de' },
  { urlImage: 'https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/4956367-invim2015001-maleevvar-d8a38.jpg', id: 4, name: 'Iron Man', email: 'ironman@super.de' },
  { urlImage: 'https://comicvine1.cbsistatic.com/uploads/scale_small/14/140903/4127149-11.jpg', id: 5, name: 'Hulk', email: 'hulk@super.de' },
  { urlImage: 'https://comicvine1.cbsistatic.com/uploads/scale_small/12/124259/7025229-rco022_1564570505.jpg', id: 6, name: 'Captain America', email: 'captainameric@super.de' },
];


export default App;
