import { useState } from 'react';
import { useAppSelector } from 'store/hooks';
import CheckBox from 'components/CheckBox';
import FilterImage from 'assets/svg/filter.svg';
import CloseImage from 'assets/svg/close.svg';
import { Tags } from 'types';
import classNames from 'classnames';
import styles from '../../styles.module.scss';

type Props = {
  tags: Tags;
  onChangeTag: (e: React.ChangeEvent<HTMLInputElement>, label: string) => void;
  onShow: () => void;
  onClear: () => void;
};

const FiltersMobile = ({ tags, onChangeTag, onShow, onClear }: Props) => {
  const [isShowDropdown, setShowDropdown] = useState<boolean>(false);
  const navRole = useAppSelector((state) => state.filters.nav);
  const selectedTags = useAppSelector(
    (state) => state.filters.selectedTags[navRole]
  );

  const handleDropdown = () => {
    setShowDropdown(!isShowDropdown);
  };

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClear();
  };

  const classNameContainer = classNames(
    [styles.filters__container, styles.filters__container_row],
    {
      [styles['filters__container_active']]: isShowDropdown
    }
  );

  const classNameDropdown = classNames(styles.filters__dropdown, {
    [styles.filters__dropdown_active]: isShowDropdown
  });

  return (
    <div className={styles.filters__wrapper}>
      <div className={styles.filters__text}>
        Воспользуйтесь фильтром, чтобы посмотреть подборку материалов
      </div>
      <div className={classNameContainer} onClick={handleDropdown}>
        <div className={styles.filters__box}>
          <img
            className={styles.filters__image}
            src={FilterImage}
            alt='иконка'
            width={18}
            height={11}
          />
          <span className={styles.filters__box_text}>ФИЛЬТР</span>
        </div>
        <button
          className={styles['filters__btn-close']}
          type='button'
          disabled={!selectedTags.length}
          onClick={handleClose}
        >
          <img src={CloseImage} alt='Крестик' width={14} height={14} />
        </button>
      </div>
      <div className={classNameDropdown}>
        <div className={styles.filters__tags}>
          {tags.map((tag, index) => {
            const isChecked = selectedTags.some(
              (selectedTag) => selectedTag === tag
            );
            return (
              <CheckBox
                id={`${index}`}
                key={index}
                label={tag}
                checked={isChecked}
                onChange={(e) => onChangeTag(e, tag)}
              />
            );
          })}
        </div>
        <button
          className={`${styles.filters__btn} ${
            selectedTags.length && styles.filters__btn_active
          }`}
          type='button'
          disabled={!selectedTags.length}
          onClick={onShow}
        >
          Показать подборку
        </button>
      </div>
    </div>
  );
};

export default FiltersMobile;
