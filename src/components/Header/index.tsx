// import { useWindowSize } from 'hooks/useWindowSize';
import Image from 'assets/image/header.jpg';
import { IData } from 'types';
import styles from './styles.module.scss';

type Props = {
  imageLink: string | undefined;
  imageLinkSmall: string | undefined;
  data: IData;
  buttonName?: string;
  isShowSubheader?: boolean;
  onClick?: () => void;
};

const Header = () => {
  // const [width] = useWindowSize();
  // const imageSrc = width < 577 ? imageLinkSmall : imageLink;
  // const marginTop =
  // data?.header_margin_top !== undefined ? data.header_margin_top : 0;
  const marginTop = 0;

  return (
    <div className={styles.header}>
      <img src={Image} alt='Заголовок' />
    </div>
  );
};

export default Header;
