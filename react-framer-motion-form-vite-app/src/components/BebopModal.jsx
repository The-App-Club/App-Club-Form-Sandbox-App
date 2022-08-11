import {useEffect, useRef, useMemo, useState} from 'react';
import {css, cx} from '@emotion/css';
import {useKeyPress} from '../hooks/useKeyPress';
import {MdClose} from 'react-icons/md';
import {AnimatePresence, motion} from 'framer-motion';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BebopForm} from './BebopForm';

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

const BebopModal = ({open, setOpen}) => {
  const escapePress = useKeyPress({expectedPressKey: 'Escape'});
  useEffect(() => {
    if (open) {
      const html = document.documentElement;
      const body = html.querySelector('body');
      html.classList.add('loading');
      body.classList.add('loading');
    } else {
      const html = document.documentElement;
      const body = html.querySelector('body');
      html.classList.remove('loading');
      body.classList.remove('loading');
    }
  }, [open]);

  useEffect(() => {
    if (escapePress) {
      setOpen((open) => {
        return false;
      });
    }
  }, [escapePress]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <div
            className={css`
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: rgba(0, 0, 0, 0.3);
            `}
            onClick={(e) => {
              setOpen((open) => {
                return false;
              });
            }}
          />
          <motion.div
            initial={'initial'}
            animate={'animate'}
            exit={'hidden'}
            variants={motionConfig}
            transition={{duration: 0.4, ease: 'easeInOut'}}
            className={css`
              z-index: 1;
              position: relative;
              max-width: 30rem;
              min-height: 40rem;
              margin: 5rem auto 0;
              @media (max-width: 1400px) {
                margin: 4rem auto 0;
                max-width: 30rem;
                min-height: 34rem;
              }
              @media (max-width: 768px) {
                margin: 3rem auto 0;
                max-width: 30rem;
                min-height: 36rem;
              }
              background: #ffffff;
              width: 100%;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              flex-direction: column;
            `}
          >
            <div
              className={css`
                width: 100%;
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 1rem 0;
                h2 {
                  margin: 0;
                }
              `}
            >
              <h2>Yup Bebop Modal</h2>
              <div
                className={css`
                  position: absolute;
                  right: 1rem;
                  :hover {
                    cursor: pointer;
                  }
                `}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen((open) => {
                    return false;
                  });
                }}
              >
                <MdClose size={24} />
              </div>
            </div>
            <BebopForm setOpen={setOpen} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export {BebopModal};
