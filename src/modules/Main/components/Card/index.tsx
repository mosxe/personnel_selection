import classNames from 'classnames';
import Type from './components/Type';
import Image from './components/Image';
import Background from './components/Background';
import { IDataItem } from 'types';
import styles from './styles.module.scss';

type Props = {
  data: IDataItem;
};

const Card = ({ data }: Props) => {
  const { title, desc, status, category, type, image } = data;

  const classNameCard = classNames(styles.card, {
    [styles.card_red]: category === 'material',
    [styles.card_blue]: category === 'hiring',
    [styles.card_purple]: category === 'selection',
    [styles.card_passed]: status === 'завершено',
    [styles.card_shadow]: type === 'Видео',
    [styles.card_hover]: type !== 'Видео'
  });

  const classNameStatus = classNames(styles.card__status, {
    [styles.card__status_active]: status === 'в процессе',
    [styles.card__status_passed]: status === 'завершено'
  });

  return (
    <article className={classNameCard}>
      <div className={styles.card__wrapper}>
        <div className={styles.card__type}>
          <Type type={type} />
        </div>
        <div className={styles.card__img}>
          <Image image={image} type={type} />
        </div>
        <div className={styles.card__content}>
          {status !== '' && <div className={classNameStatus}>{status}</div>}
          <span className={styles.card__text}>{title}</span>
          <span className={styles.card__desc}>{desc}</span>
        </div>
        <Background type={type} />
      </div>
    </article>
  );
};

export default Card;
