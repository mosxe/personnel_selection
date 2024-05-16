import { PropsChildren } from '../types';
import styles from '../styles.module.scss';

const ModalFooter = ({ children }: PropsChildren) => {
  return <div className={styles['modal__footer']}>{children}</div>;
};

export default ModalFooter;
