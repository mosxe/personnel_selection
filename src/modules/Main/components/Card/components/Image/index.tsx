import CourseImage from 'assets/svg/background_course.svg';
import TreningImage from 'assets/svg/background_trening.svg';
import TrenagerImage from 'assets/svg/background_trenager.svg';
import MemoImage from 'assets/svg/background_memo.svg';
import DocImage from 'assets/svg/background_doc.svg';
import PdfImage from 'assets/svg/background_pdf.svg';
import TestImage from 'assets/svg/background_test.svg';
import InstructionImage from 'assets/svg/background_instruction.svg';
import { Type } from 'types';
import styles from '../../styles.module.scss';

type Props = {
  image: string | null;
  type: Type;
};

const Image = ({ image, type }: Props) => {
  const srcImages = {
    'Электронный курс': CourseImage,
    Тренинг: TreningImage,
    Тренажёр: TrenagerImage,
    Памятка: MemoImage,
    Шаблон: DocImage,
    Документ: PdfImage,
    Тест: TestImage,
    Инструкция: InstructionImage
  };

  const isShowIcon = image === '' && type !== 'Видео';
  const isShowImage = image !== '' && image !== null;

  return (
    <>
      {isShowIcon && (
        <div className={styles.card__img_circle}>
          <img src={srcImages[type]} alt='Иконка' />
        </div>
      )}
      {isShowImage && <img src={image} alt='Обложка' />}
      {type === 'Видео' && (
        <svg
          className={styles.card__img_background}
          width='80'
          height='80'
          viewBox='0 0 80 80'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle opacity='0.5' cx='40' cy='40' r='40' fill='#8D8E91' />
          <path
            d='M53.2778 37.4019C55.2778 38.5566 55.2778 41.4433 53.2778 42.598L35.6112 52.7979C33.6112 53.9526 31.1112 52.5092 31.1112 50.1998V29.8001C31.1112 27.4907 33.6112 26.0473 35.6112 27.202L53.2778 37.4019Z'
            fill='white'
          />
        </svg>
      )}
    </>
  );
};

export default Image;
