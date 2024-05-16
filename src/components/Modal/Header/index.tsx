import { PropsChildren } from '../types';
import styles from '../styles.module.scss';

const ModalHeader = ({ children }: PropsChildren) => {
  return <div className={styles['modal__header']}>{children}</div>;
};

export default ModalHeader;
