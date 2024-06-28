import classNames from 'classnames';
import Type from './components/Type';
import Image from './components/Image';
import Background from './components/Background';
import { IDataItem } from 'types';
import {
  useLazyUpdateStatusMaterialQuery,
  useLazyGetDataQuery
} from 'store/apiSlice';
import styles from './styles.module.scss';

type Props = {
  data: IDataItem;
};

const Card = ({ data }: Props) => {
  const { id, title, desc, status, category, type, image, link } = data;
  const [updateStatus] = useLazyUpdateStatusMaterialQuery();
  const [updateData] = useLazyGetDataQuery();

  const classNameCard = classNames(styles.card, {
    [styles.card_red]: category === 'Общие вводные материалы',
    [styles.card_blue]: category === 'Найм рабочего персонала',
    [styles.card_purple]: category === 'Подбор РСС',
    [styles.card_passed]:
      status === 'завершено' && type !== 'Видео' && type !== 'Электронный курс',
    [styles.card_shadow]: type === 'Видео',
    [styles.card_hover]: type !== 'Видео'
  });

  const classNameStatus = classNames(styles.card__status, {
    [styles.card__status_active]: status === 'в процессе',
    [styles.card__status_passed]: status === 'завершено'
  });

  const handleClick = async () => {
    if (type === 'Видео') {
      window.open(`/omk_recruitment/${id}`, '_blank');
      return;
    }

    if (link) {
      window.open(link, '_blank');
      await updateStatus(id);
      await updateData();
    }
  };

  const isShowStatus =
    status !== '' &&
    (type === 'Видео' ||
      type === 'Электронный курс' ||
      type === 'Тренажёр' ||
      type === 'Тест');

  return (
    <article className={classNameCard} onClick={handleClick}>
      <div className={styles.card__wrapper}>
        <div className={styles.card__type}>
          <Type type={type} />
        </div>
        <div className={styles.card__img}>
          <Image image={image} type={type} />
        </div>
        <div className={styles.card__content}>
          {isShowStatus && <div className={classNameStatus}>{status}</div>}
          <span className={styles.card__text}>{title}</span>
          <span className={styles.card__desc}>{desc}</span>
        </div>
        <Background type={type} />
      </div>
    </article>
  );
};

export default Card;
