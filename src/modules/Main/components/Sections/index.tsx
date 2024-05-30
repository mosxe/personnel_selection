import { useMemo, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import {
  updateNav,
  clearSelectedTags,
  filteringData,
  updateSelectedTags
} from 'store/filterSlice';
import Filters from '../Filters';
// import Links from '../Links';
import Title from './components/Title';
import Section from './components/Section';
import { Role, IResponseItem } from 'types';
import ProcessImage from 'assets/svg/process.svg';
import WorkingImage from 'assets/svg/working.svg';
import InterviewImage from 'assets/svg/interview.svg';
import styles from './styles.module.scss';

type Props = {
  dataManager: IResponseItem;
  dataHRBP: IResponseItem;
  dataRecruiter: IResponseItem;
  role: Role;
};

const Sections = ({ dataManager, dataHRBP, dataRecruiter, role }: Props) => {
  const dispatch = useAppDispatch();
  const navRole = useAppSelector((state) => state.filters.nav);
  const filteredData = useAppSelector((state) => state.filters.filteredData);

  useEffect(() => {
    dispatch(filteringData({ data: dataManager, isActive: false }));
  }, [dispatch, dataManager]);

  const handleClickNav = (role: Role) => {
    if (role !== navRole) {
      const selectedData =
        role === 'manager'
          ? dataManager
          : role === 'hr_bp'
          ? dataHRBP
          : dataRecruiter;
      dispatch(updateNav(role));
      dispatch(filteringData({ data: selectedData, isActive: true }));
    }
  };

  const filteredTags = useMemo(() => {
    const dataTags =
      navRole === 'manager'
        ? dataManager.tags
        : navRole === 'recruiter'
        ? dataRecruiter.tags
        : navRole === 'hr_bp'
        ? dataHRBP.tags
        : [];
    return dataTags;
  }, [navRole, dataManager.tags, dataRecruiter.tags, dataHRBP.tags]);

  const onShow = () => {
    const selectedData =
      navRole === 'manager'
        ? dataManager
        : navRole === 'hr_bp'
        ? dataHRBP
        : dataRecruiter;
    dispatch(filteringData({ data: selectedData, isActive: true }));
  };

  const onClear = () => {
    const selectedData =
      navRole === 'manager'
        ? dataManager
        : navRole === 'hr_bp'
        ? dataHRBP
        : dataRecruiter;
    dispatch(clearSelectedTags());
    dispatch(filteringData({ data: selectedData, isActive: false }));
  };

  const handleChangeTag = (
    e: React.ChangeEvent<HTMLInputElement>,
    label: string
  ) => {
    dispatch(updateSelectedTags({ label, isChecked: e.target.checked }));
    if (!e.target.checked) {
      const selectedData =
        navRole === 'manager'
          ? dataManager
          : navRole === 'hr_bp'
          ? dataHRBP
          : dataRecruiter;
      dispatch(filteringData({ data: selectedData, isActive: true }));
    }
  };

  if (
    !filteredData[navRole].dataProcess.length &&
    !filteredData[navRole].dataInterview.length &&
    !filteredData[navRole].dataWorking.length
  ) {
    return (
      <>
        <Filters
          role={role}
          navRole={navRole}
          tags={filteredTags}
          onClickNav={handleClickNav}
          onChangeTag={handleChangeTag}
          onShow={onShow}
          onClear={onClear}
        />
        <section className={styles.section}>
          <div className={styles['section__no-data']}>
            Материалы отсутствуют
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Filters
        role={role}
        navRole={navRole}
        tags={filteredTags}
        onClickNav={handleClickNav}
        onChangeTag={handleChangeTag}
        onShow={onShow}
        onClear={onClear}
      />
      {/* <Links /> */}
      {filteredData[navRole].dataProcess.length > 0 && (
        <section className={styles.section}>
          <Title
            title='Процесс подбора персонала в ОМК'
            image={ProcessImage}
            tooltipText='В этом разделе собраны материалы о процессе подбора персонала, принятом в ОМК'
          />
          <Section data={filteredData[navRole].dataProcess} />
        </section>
      )}
      {filteredData[navRole].dataWorking.length > 0 && (
        <section className={styles.section}>
          <Title
            title='Работа в автоматизированной системе подбора персонала Поток'
            image={WorkingImage}
            tooltipText='В этом разделе собраны инструкции по работе в системе Поток'
          />
          <Section data={filteredData[navRole].dataWorking} />
        </section>
      )}
      {filteredData[navRole].dataInterview.length > 0 && (
        <section className={styles.section}>
          <Title
            title='Интервью с кандидатами'
            image={InterviewImage}
            tooltipText='В этом разделе собраны материалы, рассказывающие о принципах, правилах и инструментах проведения интервью с кандидатами на вакансии'
          />
          <Section data={filteredData[navRole].dataInterview} />
        </section>
      )}
    </>
  );
};

export default Sections;
