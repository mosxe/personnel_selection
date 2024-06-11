import { Main as MainLayout, Layout } from 'components/Layout';
import Loader from 'components/Loader';
import Error from 'components/Error';
import Header from './components/Header';
import Sections from './components/Sections';
import { useGetDataQuery } from 'store/apiSlice';
import { initialState } from 'store/store';

const Main = () => {
  const { data = initialState, isLoading, isError } = useGetDataQuery();

  if (isLoading) {
    return (
      <MainLayout>
        <Header />
        <Layout>
          <Loader />
        </Layout>
      </MainLayout>
    );
  }

  if (isError || data.isError) {
    return (
      <MainLayout>
        <Header />
        <Layout>
          <Error />
        </Layout>
      </MainLayout>
    );
  }

  if (data.role === 'guest') {
    return (
      <MainLayout>
        <Header />
        <Layout>
          <Error message='Недостаточно прав доступа.' />
        </Layout>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Header />
      <Sections
        role={data.role}
        dataManager={data.dataManager}
        dataHRBP={data.dataHRBP}
        dataRecruiter={data.dataRecruiter}
      />
    </MainLayout>
  );
};

export default Main;
