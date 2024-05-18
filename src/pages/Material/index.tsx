import HeaderImage from 'components/Header';
import Footer from 'components/Footer';
import Material from 'modules/Material';

const MainPage = () => {
  return (
    <>
      <HeaderImage isOnlyImage={false} />
      <Material />
      <Footer />
    </>
  );
};

export default MainPage;
