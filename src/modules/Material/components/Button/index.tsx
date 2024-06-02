import styles from './styles.module.scss';

type Props = {
  isShowAssessment: boolean;
  handleClick: (isSwitch: boolean) => void;
};

const Button = ({ isShowAssessment, handleClick }: Props) => {
  const nameBtn = !isShowAssessment
    ? 'Перейти к тестированию'
    : 'Смотреть видео';

  return (
    <button
      className={styles.material__btn}
      type='button'
      onClick={() => handleClick(!isShowAssessment)}
    >
      {nameBtn}
      <svg
        width='7'
        height='12'
        viewBox='0 0 7 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1 11L6 6L1 1'
          stroke='#8D8E91'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  );
};

export default Button;
