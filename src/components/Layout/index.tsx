import { ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
};

const Main = ({ children }: Props) => {
  return <main className={styles.main}>{children}</main>;
};

const Layout = ({ children }: Props) => {
  return <section className={styles.layout}>{children}</section>;
};

export { Main, Layout };
