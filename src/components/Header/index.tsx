// import { useWindowSize } from 'hooks/useWindowSize';
import Image from 'assets/images/header.jpg';
import styles from './styles.module.scss';

const Header = () => {
  // const [width] = useWindowSize();
  // const imageSrc = width < 577 ? imageLinkSmall : imageLink;
  // const marginTop =
  // data?.header_margin_top !== undefined ? data.header_margin_top : 0;

  return (
    <div className={styles.header}>
      <img src={Image} alt='Заголовок' />
    </div>
  );
};

export default Header;
