import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = {
  searchVision: true,
  title: '',
  year: '',
  country: '',
  genre: '',
  actors: '',
  director: '',
  released: '',
  rating: ''
}

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case 'VISION':
      return {...state, searchVision: state.searchVision = action.visionChange}

    case 'INFO':
      return {...state, 
                  title: state.title = action.titleChange,
                  year: state.year = action.yearChange,
                  country: state.country = action.countryChange,
                  genre: state.genre = action.genreChange,
                  actors: state.actors = action.actorsChange,
                  director: state.director = action.directorChange,
                  released: state.released = action.releasedChange,
                  rating: state.rating = action.ratingChange
              }

    case 'DATA':
      return{...state, data: state.data = action.changeData}
  
    default:
      return state;
  }
}

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
