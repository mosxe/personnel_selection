import Header from 'components/Header';
import styles from './styles.module.scss';

const Main = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section>MAIN</section>
      </main>
    </>
  );
};

export default Main;
