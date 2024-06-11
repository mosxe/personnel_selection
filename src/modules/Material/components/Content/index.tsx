import Type from '../Type';
import { File, Type as IType } from 'types';
import styles from './styles.module.scss';

type Props = {
  description: string;
  speakers: string;
  files: File[];
  onClick: (isShowAssessment: boolean) => void;
};

const Speakers = ({ speakers }: Pick<Props, 'speakers'>) => {
  return (
    <div className={styles.description__wrapper}>
      <div className={styles.description__title}>Спикеры</div>
      <div
        className={styles.description__text}
        dangerouslySetInnerHTML={{ __html: speakers }}
      ></div>
    </div>
  );
};

const Description = ({ description }: Pick<Props, 'description'>) => {
  return (
    <div className={styles.description__wrapper}>
      <div className={styles.description__title}>Содержание</div>
      <div
        className={styles.description__text}
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </div>
  );
};

const Files = ({ files, onClick }: Pick<Props, 'files' | 'onClick'>) => {
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
  );
};

const Content = ({ description, speakers, files, onClick }: Props) => {
  return (
    <div className={`${styles.description}`}>
      {description && <Description description={description} />}
      {speakers && <Speakers speakers={speakers} />}
      {files.length > 0 && <Files files={files} onClick={onClick} />}
    </div>
  );
};

export default Content;

export { Speakers, Description, Files };
