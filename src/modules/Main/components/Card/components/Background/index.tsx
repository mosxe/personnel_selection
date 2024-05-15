import { Type } from 'types';
import styles from '../../styles.module.scss';

type Props = {
  type: Type;
};

const CardBackground = ({ type }: Props) => {
  switch (type) {
    case 'Электронный курс':
      return (
        <div className={styles.card__background}>
          перейти к электронному курсу
        </div>
      );
    case 'Тренинг':
      return <div className={styles.card__background}>перейти к тренингу</div>;
    case 'Тренажёр':
      return <div className={styles.card__background}>перейти к тренажёру</div>;
    default:
      return <div className={styles.card__background}>скачать материал</div>;
  }
};

export default CardBackground;
