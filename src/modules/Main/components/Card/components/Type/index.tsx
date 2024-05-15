import { Type } from 'types';
import VideoImage from 'assets/svg/status_video.svg';
import CourseImage from 'assets/svg/status_course.svg';
import TreningImage from 'assets/svg/status_trening.svg';
import TrenagerImage from 'assets/svg/status_trenager.svg';
import MemoImage from 'assets/svg/status_memo.svg';
import DocImage from 'assets/svg/status_doc.svg';
import PdfImage from 'assets/svg/status_pdf.svg';
import TestImage from 'assets/svg/status_test.svg';
import InstructionImage from 'assets/svg/status_instruction.svg';
import styles from './styles.module.scss';

type Props = {
  type: Type;
};

const CardType = ({ type }: Props) => {
  const srcImages = {
    Памятка: MemoImage,
    Шаблон: DocImage,
    Документ: PdfImage,
    Тест: TestImage,
    Инструкция: InstructionImage
  };

  switch (type) {
    case 'Видео': {
      return (
        <div className={`${styles.type} ${styles.type_white}`}>
          <img width={18} height={18} src={VideoImage} alt='Иконка' />
          <span className={styles.type__text}>{type}</span>
        </div>
      );
    }
    case 'Электронный курс': {
      return (
        <div className={styles.type}>
          <img width={22} height={16} src={CourseImage} alt='Иконка' />
          <span className={styles.type__text}>{type}</span>
        </div>
      );
    }
    case 'Тренинг': {
      return (
        <div className={styles.type}>
          <img width={18} height={18} src={TreningImage} alt='Иконка' />
          <span className={styles.type__text}>{type}</span>
        </div>
      );
    }
    case 'Тренажёр': {
      return (
        <div className={styles.type}>
          <img width={18} height={18} src={TrenagerImage} alt='Иконка' />
          <span className={styles.type__text}>{type}</span>
        </div>
      );
    }
    case 'Памятка':
    case 'Шаблон':
    case 'Документ':
    case 'Тест':
    case 'Инструкция': {
      const srcImage = srcImages[type];
      return (
        <div className={`${styles.type} ${styles.type_dark}`}>
          <img width={18} height={18} src={srcImage} alt='Иконка' />
          <span className={styles.type__text}>{type}</span>
        </div>
      );
    }
    default: {
      return null;
    }
  }
};

export default CardType;
