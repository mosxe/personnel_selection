import HeaderImage from 'components/Header';
import Header from './components/Header';
import Filters from './components/Filters';
import styles from './styles.module.scss';

const Main = () => {
  return (
    <>
      <HeaderImage />
      <main className={styles.main}>
        <section>
          <Header />
          <Filters />
        </section>
        <section>MAIN</section>
      </main>
    </>
  );
};

export default Main;
