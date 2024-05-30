import ArrowImage from 'assets/svg/arrow.svg';
import PeopleImage from 'assets/svg/people.svg';
import styles from './styles.module.scss';

const Header = () => {
  const handleClick = () => {
    window.location.href = window.location.origin + '/home';
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__wrapper}>
        <h1>Подбор персонала</h1>
        <h2>Гид по подбору и найму персонала в ОМК</h2>
        <div className={styles.header__navigation}>
          <svg
            onClick={handleClick}
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={styles.header__home}
          >
            <g clipPath='url(#clip0_568_15137)'>
              <path
                d='M18.7276 9.6056L10.3943 1.27227C10.2902 1.1688 10.1494 1.11072 10.0026 1.11072C9.85586 1.11072 9.71505 1.1688 9.61096 1.27227L1.27763 9.6056C1.18662 9.71188 1.13906 9.84859 1.14446 9.98841C1.14986 10.1282 1.20782 10.2609 1.30676 10.3598C1.4057 10.4587 1.53834 10.5167 1.67816 10.5221C1.81798 10.5275 1.95468 10.48 2.06096 10.3889L9.99985 2.45005L17.9387 10.3945C18.045 10.4855 18.1817 10.5331 18.3215 10.5277C18.4614 10.5223 18.594 10.4643 18.6929 10.3654C18.7919 10.2664 18.8498 10.1338 18.8552 9.99397C18.8606 9.85415 18.8131 9.71744 18.7221 9.61116L18.7276 9.6056Z'
                fill='#8D8E91'
              />
              <path
                d='M15.5557 17.7778H12.7779V12.2223H7.22238V17.7778H4.44461V10L3.3335 11.1111V17.7778C3.3335 18.0725 3.45056 18.3551 3.65893 18.5635C3.86731 18.7719 4.14992 18.8889 4.44461 18.8889H8.3335V13.3334H11.6668V18.8889H15.5557C15.8504 18.8889 16.133 18.7719 16.3414 18.5635C16.5498 18.3551 16.6668 18.0725 16.6668 17.7778V10.9778L15.5557 9.8667V17.7778Z'
                fill='#8D8E91'
              />
            </g>
            <defs>
              <clipPath id='clip0_568_15137'>
                <rect width='20' height='20' fill='white' />
              </clipPath>
            </defs>
          </svg>
          <img src={ArrowImage} alt='стрелка' width={11} height={16} />
          <span className={styles.header__text}>Подбор персонала</span>
        </div>
      </div>
      <div className={styles.header__img}>
        <img src={PeopleImage} alt='картинка' />
      </div>
    </div>
  );
};

export default Header;
