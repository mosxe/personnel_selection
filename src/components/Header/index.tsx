import { useWindowSize } from 'hooks/useWindowSize';
import { useNavigate } from 'react-router-dom';
import Image from 'assets/images/header.jpg';
import ImageSmall from 'assets/images/header_small.jpg';
import styles from './styles.module.scss';

type Props = {
  isOnlyImage?: boolean;
};

const Header = ({ isOnlyImage = true }: Props) => {
  const navigate = useNavigate();
  const [width] = useWindowSize();

  return (
    <div className={styles.header}>
      {width < 577 ? (
        <img src={ImageSmall} alt='Заголовок' />
      ) : (
        <img src={Image} alt='Заголовок' />
      )}
      {!isOnlyImage && (
        <div className={styles.header__wrapper}>
          <div className={styles.header__container}>
            <div className={styles.header__title}>
              Процесс подбора персонала в ОМК
            </div>
            <div className={styles.header__subtitle}>
              Подбор персонала в ОМК. Введение
            </div>
          </div>
          <button
            className={styles.header__btn}
            type='button'
            onClick={() => navigate('/personnel_selection')}
          >
            Вернуться к подбору персонала
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
