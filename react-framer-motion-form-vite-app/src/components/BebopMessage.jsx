import {css} from '@emotion/css';
import {motion, AnimatePresence} from 'framer-motion';
import Alert from 'react-bootstrap/Alert';
const motionConfig = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  hidden: {
    y: 20,
    opacity: 0,
  },
};
const BebopMessage = ({message, type = 'danger'}) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={'initial'}
          animate={'animate'}
          exit={'hidden'}
          variants={motionConfig}
          transition={{duration: 0.4, ease: 'easeInOut'}}
          className={css`
            .alert {
              height: 2.5rem;
              padding: 0.5rem;
              margin: 0;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              font-size: 14px;
            }
          `}
        >
          <Alert variant={type}>{message}</Alert>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export {BebopMessage};
