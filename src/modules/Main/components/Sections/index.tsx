import { useState, useMemo } from 'react';
import Filters from '../Filters';
import Links from '../Links';
import Title from './components/Title';
import Section from './components/Section';
import { Role, IResponseItem, Tags, IDataItem } from 'types';
import { filteringDataTags } from './helps';
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

type filteredDataState = {
  dataProcess: IDataItem[];
  dataWorking: IDataItem[];
  dataInterview: IDataItem[];
  isActive: boolean;
};

const initialStateFilteredData = {
  dataProcess: [],
  dataWorking: [],
  dataInterview: [],
  isActive: false
};

const Sections = ({ dataManager, dataHRBP, dataRecruiter, role }: Props) => {
  const [navRole, setNavRole] = useState<Role>(role);
  const [selectedTags, setSelectedTags] = useState<Tags>([]);
  const [filteredData, setFilteredData] = useState<filteredDataState>(
    initialStateFilteredData
  );

  const handleClickNav = (role: Role) => {
    if (role !== navRole) {
      setNavRole(role);
      setSelectedTags([]);
      setFilteredData(initialStateFilteredData);
    }
  };

  const handleChangeTag = (
    e: React.ChangeEvent<HTMLInputElement>,
    label: string
  ) => {
    if (e.target.checked) {
      setSelectedTags((prev) => [...prev, label]);
    } else {
      const filteredSelectedTags = selectedTags.filter(
        (selectedTag) => selectedTag !== label
      );
      setSelectedTags(filteredSelectedTags);
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
    switch (navRole) {
      case 'manager':
        {
          const tempDataProcess = filteringDataTags(
            dataManager.dataProcess,
            selectedTags
          );
          const tempDataWorking = filteringDataTags(
            dataManager.dataWorking,
            selectedTags
          );
          const tempDataInterview = filteringDataTags(
            dataManager.dataInterview,
            selectedTags
          );
          setFilteredData({
            dataProcess: tempDataProcess,
            dataWorking: tempDataWorking,
            dataInterview: tempDataInterview,
            isActive: true
          });
        }
        break;
      case 'recruiter':
        {
          const tempDataProcess = filteringDataTags(
            dataRecruiter.dataProcess,
            selectedTags
          );
          const tempDataWorking = filteringDataTags(
            dataRecruiter.dataWorking,
            selectedTags
          );
          const tempDataInterview = filteringDataTags(
            dataRecruiter.dataInterview,
            selectedTags
          );
          setFilteredData({
            dataProcess: tempDataProcess,
            dataWorking: tempDataWorking,
            dataInterview: tempDataInterview,
            isActive: true
          });
        }
        break;
      case 'hr_bp':
        {
          const tempDataProcess = filteringDataTags(
            dataHRBP.dataProcess,
            selectedTags
          );
          const tempDataWorking = filteringDataTags(
            dataHRBP.dataWorking,
            selectedTags
          );
          const tempDataInterview = filteringDataTags(
            dataHRBP.dataInterview,
            selectedTags
          );
          setFilteredData({
            dataProcess: tempDataProcess,
            dataWorking: tempDataWorking,
            dataInterview: tempDataInterview,
            isActive: true
          });
        }
        break;
      default:
        break;
    }
  };

  const onClear = () => {
    setSelectedTags([]);
    setFilteredData(initialStateFilteredData);
  };

  const dataSection = () => {
    switch (navRole) {
      case 'manager':
        return filteredData.isActive ? filteredData : dataManager;
      case 'recruiter':
        return filteredData.isActive ? filteredData : dataHRBP;
      case 'hr_bp':
        return filteredData.isActive ? filteredData : dataRecruiter;
      default:
        return filteredData;
    }
  };

  return (
    <>
      <Filters
        role={role}
        navRole={navRole}
        tags={filteredTags}
        selectedTags={selectedTags}
        onClickNav={handleClickNav}
        onChangeTag={handleChangeTag}
        onShow={onShow}
        onClear={onClear}
      />
      <Links />
      <section className={styles.section}>
        <Title
          title='Процесс подбора персонала в ОМК'
          image={ProcessImage}
          tooltipText='В этом разделе вы найдете материалы, которые поясняют как устроен процесс найма персонала в ОМК'
        />
        <Section data={dataSection().dataProcess} />
      </section>
      <section className={styles.section}>
        <Title
          title='Работа в автоматизированной системе подбора персонала Поток'
          image={WorkingImage}
          tooltipText='В этом разделе вы найдете материалы, которые поясняют как устроен процесс найма персонала в ОМК'
        />
        <Section data={dataSection().dataWorking} />
      </section>
      <section className={styles.section}>
        <Title
          title='Интервью с кандидатами'
          image={InterviewImage}
          tooltipText='В этом разделе вы найдете материалы, которые поясняют как устроен процесс найма персонала в ОМК'
        />
        <Section data={dataSection().dataInterview} />
      </section>
    </>
  );
};

export default Sections;
