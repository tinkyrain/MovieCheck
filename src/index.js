import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = {
  searchVision: true,
  error: false,
  textError: '',
  info: {},
}

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case 'VISION':
      return {...state, 
        searchVision: state.searchVision = action.visionChange
      }

    case 'INFO':
      return{...state,
        info: state.info = action.infoChange
      }
    
    case 'ERROR':
      return{...state,
        error: state.error = action.errorChange,
        textError: state.textError = action.textErrorChange
      }
  
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
