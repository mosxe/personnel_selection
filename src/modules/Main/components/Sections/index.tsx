import Card from '../Card';
import ProcessImage from 'assets/svg/process.svg';
import WorkingImage from 'assets/svg/working.svg';
import InterviewImage from 'assets/svg/interview.svg';
import HelpImage from 'assets/svg/help.svg';
import styles from './styles.module.scss';

const Sections = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.section__wrapper}>
          <img src={ProcessImage} width={50} height={50} alt='Картинка' />
          <div className={styles.section__container}>
            <div className={styles.section__title}>
              Процесс подбора персонала в ОМК
            </div>
            <img
              className={styles.section__help}
              src={HelpImage}
              alt='Картинка'
            />
          </div>
        </div>
        <div className={styles.section__content}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
};

export default Sections;
