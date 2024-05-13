import HeaderImage from 'components/Header';
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
      <>
        <HeaderImage />
        <main className={styles.main}>
          <Header />
          <Loader />
        </main>
      </>
    );
  }

  if (isError) {
    return <Error />;
  }
  return (
    <>
      <HeaderImage />
      <main className={styles.main}>
        <Header />
        <Sections
          role={data.role}
          dataProcess={data.dataProcess}
          dataWorking={data.dataWorking}
          dataInterview={data.dataInterview}
        />
      </main>
    </>
  );
};

export default Main;
