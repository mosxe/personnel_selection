import Type from './Type';
import styles from './styles.module.scss';

const Card = () => {
  return (
    <article className={styles.card}>
      <div className={styles.card__wrapper}>
        <div className={styles.card__type}>
          <Type id='1' text='В процессе' />
        </div>
        <div className={styles.card__img}>
          <img
            src='https://s3-alpha-sig.figma.com/img/285e/249e/2b14b88e5f5c894bdbfa408a43775110?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f05vYSQME~Oqas-qnIS5L1tFPRckLDwWHNCVKbKUCXtvb9xGRgftfHgJE08dr7Jw5KBqNR7UuXPUHJRDEvTcjBS8SEJ4DdmZXz37d2f6CplNGZQtYWpsHxTkw4dQ7XV2FkCyZCWxSmKgRuuoIQe9ibaCKarG2vgh2Y1ZZpz9aSHbuitaVGe9OL9kVhPXNV2KV7zUkMcDAayWNvubRK614BcMgSGOUa8x1pYamihC00zdi9QDg~Ihn1vDsvZyQdzcgSfczFy01331SXw7sAPy7u~Hyz3u7sRWGWtE1EY2f4A5hwQGVgkoYBtcd8AurE56eadXYj5oF0FRxQ5lfp98qw__'
            alt='Обложка'
          />
          <svg
            width='80'
            height='80'
            viewBox='0 0 80 80'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle opacity='0.5' cx='40' cy='40' r='40' fill='#8D8E91' />
            <path
              d='M53.2778 37.4019C55.2778 38.5566 55.2778 41.4433 53.2778 42.598L35.6112 52.7979C33.6112 53.9526 31.1112 52.5092 31.1112 50.1998V29.8001C31.1112 27.4907 33.6112 26.0473 35.6112 27.202L53.2778 37.4019Z'
              fill='white'
            />
          </svg>
        </div>

        <div className={styles.card__content}>
          <div className={styles.card__status}>В процессе</div>
          <span className={styles.card__text}>
            Подбор персонала в ОМК. Введение
          </span>
          <span className={styles.card__desc}>
            вводная информация о подборе персонала в компании
          </span>
        </div>
      </div>
    </article>
  );
};

export default Card;
