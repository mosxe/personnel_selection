import { useState } from 'react';
import Filters from '../Filters';
import Links from '../Links';
import Title from './components/Title';
import Section from './components/Section';
import { Role, IDataSection } from 'types';
import ProcessImage from 'assets/svg/process.svg';
import WorkingImage from 'assets/svg/working.svg';
import InterviewImage from 'assets/svg/interview.svg';
import styles from './styles.module.scss';

type Props = {
  dataProcess: IDataSection;
  dataWorking: IDataSection;
  dataInterview: IDataSection;
  role: Role;
};

const Sections = ({ dataProcess, dataWorking, dataInterview, role }: Props) => {
  return (
    <>
      <Filters role={role} />
      <Links />
      <section className={styles.section}>
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
      </section>
    </>
  );
};

export default Sections;
