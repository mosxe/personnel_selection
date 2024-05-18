import { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Modal, { ButtonClose } from 'components/Modal';
import classNames from 'classnames';
import Type from './components/Type';
import Image from './components/Image';
import Background from './components/Background';
import { IDataItem } from 'types';
import styles from './styles.module.scss';

type Props = {
  data: IDataItem;
};

const Card = ({ data }: Props) => {
  const [isShowModal, setShowModal] = useState<boolean>(false);
  const [time, setTime] = useState<string>('10:10:10');
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const isStartPlaying = useRef<boolean>(false);
  const { id, title, desc, status, category, type, image, link } = data;

  const classNameCard = classNames(styles.card, {
    [styles.card_red]: category === 'material',
    [styles.card_blue]: category === 'hiring',
    [styles.card_purple]: category === 'selection',
    [styles.card_passed]: status === 'завершено',
    [styles.card_shadow]: type === 'Видео',
    [styles.card_hover]: type !== 'Видео'
  });

  const classNameStatus = classNames(styles.card__status, {
    [styles.card__status_active]: status === 'в процессе',
    [styles.card__status_passed]: status === 'завершено'
  });

  const handleClick = () => {
    switch (type) {
      case 'Видео':
        navigate(`/personnel_selection/${id}`);
        // setShowModal(!isShowModal);
        break;
      case 'Электронный курс':
        break;
      default:
        window.open(link, '_blank');
        break;
    }
  };

  const handleShowModal = () => {
    setShowModal(!isShowModal);
  };

  // const formatedTime = (event: any) => {
  //   try {
  //     let hoursString = '';
  //     let minutesString = '';
  //     let secondsString = '';
  //     const duration = event.target.duration;
  //     if (!isNaN(duration)) {
  //       const hours = Math.floor(duration / 3600);
  //       const minutes = Math.floor((duration % 3600) / 60);
  //       const seconds = Math.floor((duration % 3600) % 60);

  //       hoursString = hours < 10 ? '0' + hours : String(hours);
  //       minutesString = minutes < 10 ? '0' + minutes : String(minutes);
  //       secondsString = seconds < 10 ? '0' + seconds : String(seconds);

  //       setTime(`${hoursString}:${minutesString}:${secondsString}`);
  //     }
  //   } catch (e) {}
  // };

  // const onViewVideo = async () => {
  //   if (
  //     (status === 'в процессе' || status === 'новый') &&
  //     !isStartPlaying.current
  //   ) {
  //     // isStartPlaying.current = true;
  //     // await updateStatus({
  //     //   education_plan_id: id,
  //     //   lesson_id: lesson_id
  //     // });
  //     // await updateData(id);
  //   }
  // };

  return (
    <>
      <article className={classNameCard} onClick={handleClick}>
        <div className={styles.card__wrapper}>
          <div className={styles.card__type}>
            <Type type={type} />
          </div>
          <div className={styles.card__img}>
            <Image image={image} type={type} />
          </div>
          <div className={styles.card__content}>
            {status !== '' && <div className={classNameStatus}>{status}</div>}
            <span className={styles.card__text}>{title}</span>
            <span className={styles.card__desc}>{desc}</span>
          </div>
          <Background type={type} />
        </div>
      </article>
      <Modal isShow={isShowModal} onClose={handleShowModal}>
        <Modal.Header>
          <div className={styles['card-modal-header']}>
            <div className={styles['card-modal-header__wrapper']}>
              <div className={styles['card-modal-header__title']}>{title}</div>
              <div className={styles['card-modal-header__desc']}>{desc}</div>
            </div>
            <div className={styles['card-modal-header__time']}>
              <div className={styles['card-modal-header__time_wrapper']}>
                <svg
                  width='13'
                  height='13'
                  viewBox='0 0 13 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6.29126 0.375C7.86598 0.375 9.37621 1.00056 10.4897 2.11405C11.6032 3.22755 12.2288 4.73778 12.2288 6.3125C12.2288 7.88722 11.6032 9.39745 10.4897 10.5109C9.37621 11.6244 7.86598 12.25 6.29126 12.25C4.71654 12.25 3.20631 11.6244 2.09281 10.5109C0.979316 9.39745 0.35376 7.88722 0.35376 6.3125C0.35376 4.73778 0.979316 3.22755 2.09281 2.11405C3.20631 1.00056 4.71654 0.375 6.29126 0.375ZM6.29126 1C4.8823 1 3.53104 1.55971 2.53476 2.556C1.53847 3.55228 0.97876 4.90354 0.97876 6.3125C0.97876 7.72146 1.53847 9.07272 2.53476 10.069C3.53104 11.0653 4.8823 11.625 6.29126 11.625C7.70022 11.625 9.05148 11.0653 10.0478 10.069C11.0441 9.07272 11.6038 7.72146 11.6038 6.3125C11.6038 4.90354 11.0441 3.55228 10.0478 2.556C9.05148 1.55971 7.70022 1 6.29126 1ZM5.97876 2.875H6.60376V6.26438L9.53876 7.95875L9.22626 8.5L5.97876 6.625V2.875Z'
                    fill='#8D8E91'
                  />
                </svg>
                <span className={styles['card-modal-header__time_text']}>
                  {time}
                </span>
              </div>
              <ButtonClose onClick={handleShowModal} />
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <video className={styles.video} controls ref={videoRef}>
            <source src={link} />
          </video>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Card;
