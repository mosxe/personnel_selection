import { useState } from 'react';
import Navs from './Navs';
import CheckBox from 'components/CheckBox';
import { Role } from 'types';
import styles from './styles.module.scss';

type Props = {
  role: Role;
};

const Filters = ({ role }: Props) => {
  const [tags, setTags] = useState([
    {
      id: 1,
      text: 'Подбор РСС',
      checked: false
    },
    {
      id: 2,
      text: 'Найм рабочего персонала',
      checked: false
    },
    {
      id: 3,
      text: 'Электронный курс',
      checked: false
    },
    {
      id: 4,
      text: 'Общие вводные материалы',
      checked: false
    }
  ]);
  const handleClick = (event) => {
    console.log(event);
  };

  return (
    <div className={styles.filters}>
      <Navs role={role} />
      <div className={styles.filters__wrapper}>
        <div className={styles.filters__text}>
          Воспользуйтесь фильтром, чтобы посмотреть подборку материалов
        </div>
        <div className={styles.filters__container}>
          <div className={styles.filters__tags}>
            {tags.map((tag, index) => (
              <CheckBox
                id={`${index}`}
                key={index}
                label={tag.text}
                checked={tag.checked}
                onChange={handleClick}
              />
            ))}
          </div>
          <div className={styles.filters__btns}>
            <button
              // className={styles.filters__btn}
              className={`${styles.filters__btn} ${styles.filters__btn_active}`}
              type='button'
            >
              Показать подборку
            </button>
            <button
              className={`${styles.filters__btn} ${styles.filters__btn_clear} ${styles.filters__btn_active}`}
              type='button'
              // className={`${styles.filters__btn} ${styles.filters__btn_clear}`}
            >
              Очистить фильтр
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
