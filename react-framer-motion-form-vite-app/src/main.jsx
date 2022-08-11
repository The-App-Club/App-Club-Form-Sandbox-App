import {createRoot} from 'react-dom/client';
import {useEffect, useRef, useMemo, useState} from 'react';
import {css, cx} from '@emotion/css';
import '@fontsource/inter';
import './styles/index.scss';
import {useKeyPress} from './hooks/useKeyPress';
import {MdClose} from 'react-icons/md';

import {AnimatePresence, motion, useAnimationControls} from 'framer-motion';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BebopModal} from './components/BebopModal';

import {Layout} from './layouts/default';

const motionConfig = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  hidden: {
    y: 60,
    opacity: 0,
  },
};

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <Layout>
      <div
        className={css`
          position: fixed;
          top: 1rem;
          left: 1rem;
        `}
      >
        <Button
          variant={'primary'}
          className={css`
            --bs-btn-font-family: 'Inter', sans-serif;
          `}
          onClick={(e) => {
            setOpen((open) => {
              return true;
            });
          }}
        >
          Open
        </Button>
      </div>
      <BebopModal open={open} setOpen={setOpen} />
    </Layout>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
