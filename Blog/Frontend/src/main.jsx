import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { App } from './App.jsx';
import { blogStore } from './Store/Store.js';

createRoot(document.getElementById('root')).render(
  <Provider store={blogStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);