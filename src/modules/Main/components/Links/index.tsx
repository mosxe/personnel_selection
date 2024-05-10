import styles from './styles.module.scss';

const Links = () => {
  return (
    <div className={styles.links}>
      <button className={styles.links__btn} type='button'>
        Как подать заявку на подбор персонала
      </button>
      <button className={styles.links__btn} type='button'>
        Как провести интервью
      </button>
    </div>
  );
};

export default Links;
