import React from 'react';
import {createRoot} from 'react-dom/client';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import './index.css';
import './form-reset.css';

import {ContactForm} from './components/ContactForm';

const App = ({children}) => {
  return (
    <ScopedCssBaseline>
      <ContactForm />
    </ScopedCssBaseline>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
