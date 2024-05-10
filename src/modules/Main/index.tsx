import HeaderImage from 'components/Header';
import Header from './components/Header';
import Filters from './components/Filters';
import Links from './components/Links';
import Sections from './components/Sections';
import styles from './styles.module.scss';

const Main = () => {
  return (
    <>
      <HeaderImage />
      <main className={styles.main}>
        <Header />
        <section>
          <Filters />
          <Links />
        </section>
        <Sections />
      </main>
    </>
  );
};

export default Main;
