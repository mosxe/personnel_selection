import { useAppSelector } from 'store/hooks';
import { useWindowSize } from 'hooks/useWindowSize';
import Navs from './components/Navs';
import FiltersMobile from './components/FiltersMobile';
import CheckBox from 'components/CheckBox';
import { Role, Tags, IResponseItem } from 'types';
import styles from './styles.module.scss';

type Props = {
  role: Role;
  navRole: Role;
  tags: Tags;
  onClickNav: (role: Role) => void;
  onChangeTag: (e: React.ChangeEvent<HTMLInputElement>, label: string) => void;
  onShow: () => void;
  onClear: () => void;
  dataHRBP: IResponseItem;
};

const Filters = ({
  role,
  tags,
  onClickNav,
  onChangeTag,
  onShow,
  onClear,
  dataHRBP
}: Props) => {
  const navRole = useAppSelector((state) => state.filters.nav);
  const selectedTags = useAppSelector(
    (state) => state.filters.selectedTags[navRole]
  );
  const [width] = useWindowSize();

  return (
    <div className={styles.filters}>
      {(role === 'recruiter' || role === 'hr_bp') && (
        <Navs
          role={role}
          navRole={navRole}
          onClick={onClickNav}
          dataHRBP={dataHRBP}
        />
      )}
      {tags.length > 0 &&
        (width > 480 ? (
          <div className={styles.filters__wrapper}>
            <div className={styles.filters__text}>
              Воспользуйтесь фильтром, чтобы посмотреть подборку материалов
            </div>
            <div className={styles.filters__container}>
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
              <div className={styles.filters__btns}>
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
                <button
                  className={`${styles.filters__btn} ${
                    styles.filters__btn_clear
                  } ${selectedTags.length && styles.filters__btn_active}`}
                  type='button'
                  disabled={!selectedTags.length}
                  onClick={onClear}
                >
                  Очистить фильтр
                </button>
              </div>
            </div>
          </div>
        ) : (
          <FiltersMobile
            tags={tags}
            onChangeTag={onChangeTag}
            onShow={onShow}
            onClear={onClear}
          />
        ))}
    </div>
  );
};

export default Filters;
