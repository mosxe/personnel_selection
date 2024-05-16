import { useEffect, useCallback } from 'react';
import ModalHeader from './Header';
import ModalBody from './Body';
import ModalFooter from './Footer';
import styles from './styles.module.scss';
import { Props } from './types';

export const ButtonClose = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className={styles['modal__button-close']}
      type='button'
      onClick={onClick}
    >
      <svg
        width='18'
        height='18'
        viewBox='0 0 18 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M9 9L1.5 1.5M9 9L16.5 16.5M9 9L16.5 1.5M9 9L1.5 16.5'
          stroke='#8D8E91'
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  );
};

const Modal = ({
  isShow,
  onClose,
  width = undefined,
  children
}: Props): JSX.Element | null => {
  const className = isShow ? `${styles.modal} ${styles.show}` : styles.modal;

  const handleUserKeyPress = useCallback(
    (event: any) => {
      if (event.key === 'Escape') {
        onClose(true);
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isShow) {
      document.body.classList.add(styles['modal-showing']);
    }
    return () => {
      document.body.classList.remove(styles['modal-showing']);
    };
  }, [isShow]);

  useEffect(() => {
    if (isShow) {
      window.addEventListener('keydown', handleUserKeyPress);
    }
    return () => {
      window.removeEventListener('keydown', handleUserKeyPress);
    };
  }, [handleUserKeyPress, isShow]);

  if (!isShow) {
    return null;
  }

  return (
    <div className={className}>
      <div className={styles['modal__container']} style={{ width: width }}>
        <div className={styles['modal__content']}>{children}</div>
      </div>
    </div>
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
