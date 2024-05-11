import VideoImage from 'assets/svg/video.svg';
import CourseImage from 'assets/svg/course.svg';
import TreningImage from 'assets/svg/trening.svg';
import TrenagerImage from 'assets/svg/trenager.svg';
import MemoImage from 'assets/svg/memo.svg';
import DocImage from 'assets/svg/doc.svg';
import PdfImage from 'assets/svg/pdf.svg';
import TestImage from 'assets/svg/test.svg';
import InstructionImage from 'assets/svg/instruction.svg';
import styles from './styles.module.scss';

type Props = {
  id: string;
  text: string;
};
const Type = ({ id, text }: Props) => {
  const name = 'Тренажёр';
  const srcImages = {
    Памятка: MemoImage,
    Шаблон: DocImage,
    Документ: PdfImage,
    Тест: TestImage,
    Инструкция: InstructionImage
  };

  switch (name) {
    case 'видео': {
      return (
        <div className={`${styles.type} ${styles.type_white}`}>
          <img width={18} height={18} src={VideoImage} alt='Иконка' />
          <span className={styles.type__text}>{name}</span>
        </div>
      );
    }
    case 'Электронный курс': {
      return (
        <div className={styles.type}>
          <img width={22} height={16} src={CourseImage} alt='Иконка' />
          <span className={styles.type__text}>{name}</span>
        </div>
      );
    }
    case 'Тренинг': {
      return (
        <div className={styles.type}>
          <img width={18} height={18} src={TreningImage} alt='Иконка' />
          <span className={styles.type__text}>{name}</span>
        </div>
      );
    }
    case 'Тренажёр': {
      return (
        <div className={styles.type}>
          <img width={18} height={18} src={TrenagerImage} alt='Иконка' />
          <span className={styles.type__text}>{name}</span>
        </div>
      );
    }
    case 'Памятка':
    case 'Шаблон':
    case 'Документ':
    case 'Тест':
    case 'Инструкция': {
      const srcImage = srcImages[name];
      return (
        <div className={`${styles.type} ${styles.type_dark}`}>
          <img width={18} height={18} src={srcImage} alt='Иконка' />
          <span className={styles.type__text}>{name}</span>
        </div>
      );
    }
    default: {
      return null;
    }
  }
};

export default Type;
