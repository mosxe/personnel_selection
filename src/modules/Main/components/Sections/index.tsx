import { useState, useMemo } from 'react';
import Filters from '../Filters';
import Links from '../Links';
import Title from './components/Title';
import Section from './components/Section';
import { Role, IResponseItem, Tags } from 'types';
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
  const [navRole, setNavRole] = useState<Role>(role);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleClickNav = (role: Role) => {
    if (role !== navRole) {
      setNavRole(role);
      setSelectedTags([]);
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
    console.log('onShow');
  };

  const onClear = () => {
    setSelectedTags([]);
  };
  // const
  // const treeData = useMemo(() => {
  // 	const filterBy = (arr: DataNode[], query: string): DataNode[] => {
  // 		return query ? arr.reduce((acc: DataNode[], item: any) => {
  // 		  if (item.children?.length ) {
  // 			 const filtered = filterBy(item.children, query)
  // 			 if ( filtered.length ) return [...acc, {...item, children:filtered}]
  // 		  }
  // 		  const {children, ...itemWithoutChildren} = item;
  // 		  return item.title?.toLowerCase().includes(query.toLowerCase()) ? [...acc, itemWithoutChildren] : acc
  // 		},[]) : arr
  // 	  }
  // 	return filterBy(data?.items || [], searchValue);
  //   }, [searchValue, data?.items]);

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
      {/* <section className={styles.section}>
        <Title
          title='Процесс подбора персонала в ОМК'
          image={ProcessImage}
          tooltipText='В этом разделе вы найдете материалы, которые поясняют как устроен процесс найма персонала в ОМК'
        />
        <Section data={dataProcess.data} />
      </section>
      <section className={styles.section}>
        <Title
          title='Работа в автоматизированной системе подбора персонала Поток'
          image={WorkingImage}
          tooltipText='В этом разделе вы найдете материалы, которые поясняют как устроен процесс найма персонала в ОМК'
        />
        <Section data={dataWorking.data} />
      </section>
      <section className={styles.section}>
        <Title
          title='Интервью с кандидатами'
          image={InterviewImage}
          tooltipText='В этом разделе вы найдете материалы, которые поясняют как устроен процесс найма персонала в ОМК'
        />
        <Section data={dataInterview.data} />
      </section> */}
    </>
  );
};

export default Sections;
