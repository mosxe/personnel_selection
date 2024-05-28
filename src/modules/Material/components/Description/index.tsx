import Type from '../Type';
import { File, Type as IType } from 'types';
import styles from './styles.module.scss';

type Props = {
  description: string;
  speakers: string;
  files: File[];
  onClick: (isShowAssessment: boolean) => void;
};

const Description = ({ description, speakers, files, onClick }: Props) => {
  const handleClick = (link: string, type: IType) => {
    if (type === 'Тест') {
      onClick(true);
    } else {
      window.open(link, '_blank');
    }
  };

  const getBtnText = (type: IType) => {
    if (type === 'Тест') {
      return 'Пройти';
    } else if (
      type === 'Электронный курс' ||
      type === 'Видео' ||
      type === 'Тренажёр'
    ) {
      return 'Смотреть';
    }
    return 'Скачать';
  };

  return (
    <div className={`${styles.description}`}>
      {description && (
        <div className={styles.description__wrapper}>
          <div className={styles.description__title}>Содержание</div>
          <div className={styles.description__text}>{description}</div>
        </div>
      )}
      {speakers && (
        <div className={styles.description__wrapper}>
          <div className={styles.description__title}>Спикеры</div>
          <div className={styles.description__text}>{speakers}</div>
        </div>
      )}
      {files.length > 0 && (
        <div className={styles.description__wrapper}>
          <div className={styles.description__title}>Материалы курса</div>
          {files.map((file, index) => {
            return (
              <div key={index} className={styles.resource}>
                <div className={styles.resource__wrapper}>
                  <Type type={file.type} />
                  <span className={styles.resource__text}>{file.name}</span>
                </div>
                <button
                  className={styles.resource__btn}
                  type='button'
                  onClick={() => handleClick(file.link, file.type)}
                >
                  {getBtnText(file.type)}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Description;
