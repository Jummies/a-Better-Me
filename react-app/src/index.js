import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import configureStore from './store'
import { Provider} from 'react-redux'; 
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from './context/modal';


const store = configureStore()

function Root() {
  return (
    <Provider store={store}>
      <ModalProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModalProvider>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);