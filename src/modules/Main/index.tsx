import Loader from 'components/Loader';
import Error from 'components/Error';
import Header from './components/Header';
import Sections from './components/Sections';
import { useGetDataQuery } from 'store/apiSlice';
import { initialState } from 'store/store';
import styles from './styles.module.scss';

const Main = () => {
  const { data = initialState, isLoading, isError } = useGetDataQuery();

  if (isLoading) {
    return (
      <main className={styles.main}>
        <Header />
        <Loader />
      </main>
    );
  }

  if (isError || data.isError) {
    return <Error />;
  }

  if (data.role === 'guest') {
    return (
      <main className={styles.main}>
        <Header />
        <div>Недостаточно прав доступа!</div>
      </main>
    );
  }
  return (
    <main className={styles.main}>
      <Header />
      <Sections
        role={data.role}
        dataManager={data.dataManager}
        dataHRBP={data.dataHRBP}
        dataRecruiter={data.dataRecruiter}
      />
    </main>
  );
};

export default Main;
