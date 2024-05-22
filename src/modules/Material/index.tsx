import { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader';
import Error from 'components/Error';
import Description from './components/Description';
import {
  useGetMaterialQuery,
  useLazyUpdateStatusMaterialQuery,
  useLazyGetDataQuery
} from 'store/apiSlice';
import classnames from 'classnames';
import stylesMain from 'modules/Main/styles.module.scss';
import styles from './styles.module.scss';

const Material = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetMaterialQuery(id);
  const [updateStatus] = useLazyUpdateStatusMaterialQuery();
  const [updateData] = useLazyGetDataQuery();
  const videoRef = useRef<HTMLVideoElement>(null);
  const isStartPlaying = useRef<boolean>(false);
  const [isShowIcon, setShowIcon] = useState<boolean>(true);
  // const isShowIcon = useRef<boolean>(true);
  // const [isShowImage, setShowImage] = useState<boolean>(true);
  const [time, setTime] = useState<string>('');

  const formatedTime = (event: any) => {
    try {
      let hoursString = '';
      let minutesString = '';
      let secondsString = '';
      const duration = event.target.duration;
      if (!isNaN(duration)) {
        const hours = Math.floor(duration / 3600);
        const minutes = Math.floor((duration % 3600) / 60);
        const seconds = Math.floor((duration % 3600) % 60);

        hoursString = hours < 10 ? '0' + hours : String(hours);
        minutesString = minutes < 10 ? '0' + minutes : String(minutes);
        secondsString = seconds < 10 ? '0' + seconds : String(seconds);

        setTime(`${hoursString}:${minutesString}:${secondsString}`);
      }
    } catch (e) {
      console.error('ERROR. Вычисление времени видео');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // if (videoRef.current) {
    //   console.log(videoRef.current);
    //   videoRef.current.addEventListener('play', onViewVideo, false);
    //   videoRef.current.addEventListener('loadedmetadata', formatedTime);
    // }

    // return () => {
    //   if (videoRef.current) {
    //     videoRef.current.pause();
    //     videoRef.current.src = '';
    //     videoRef.current.removeEventListener('play', onViewVideo);
    //     videoRef.current.removeEventListener('loadedmetadata', formatedTime);
    //   }
    // };
  }, []);

  const onViewVideo = async () => {
    console.log('clik video');
    setShowIcon(false);
    // isShowIcon.current = false;
    // if (isShowImage) {
    //   setShowImage(false);
    // }
    if (
      data?.data !== null &&
      data?.data.status !== 'завершено' &&
      !isStartPlaying.current &&
      id !== undefined
    ) {
      isStartPlaying.current = true;
      await updateStatus(id);
      await updateData();
    }
  };

  const classNameIcon = classnames(styles.material__play, {
    [styles.material__play_show]: isShowIcon
  });

  if (isLoading) {
    return (
      <main className={stylesMain.main}>
        <Loader />
      </main>
    );
  }

  if (
    isError ||
    data === undefined ||
    id === undefined ||
    data.isError ||
    data.data === null
  ) {
    return (
      <main className={stylesMain.main}>
        <Error message='Материал не найден. Обратитесь в техническую поддержку портала.' />
      </main>
    );
  }

  return (
    <main className={stylesMain.main}>
      <div className={styles['material']}>
        <div className={styles['material__video']}>
          <div className={styles['material__header']}>
            <div className={styles['material__wrapper']}>
              <span className={styles['material__title']}>
                {data.data.title}
              </span>
              <span className={styles['material__subtitle']}>
                {data.data.desc}
              </span>
            </div>
            {time !== '' && (
              <div className={styles['material__time']}>
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
                {time}
              </div>
            )}
          </div>
          <div className={styles['material__container']}>
            <svg
              className={classNameIcon}
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
            {/* {data.data.image !== '' && isShowImage && (
              <>
                <img
                  src={data.data.image}
                  className={styles.material__image}
                  alt='Обложка'
                />
                <svg
                  className={styles.material__play}
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
              </>
            )} */}
            <video
              controls
              ref={videoRef}
              // controlsList='nodownload'
              onPlay={onViewVideo}
              onPause={() => setShowIcon(true)}
              onLoadedMetadata={formatedTime}
            >
              <source src={data.data.link} />
            </video>
          </div>
        </div>
        <Description
          description={data.data.content}
          speakers={data.data.speakers}
          files={data.data.files}
        />
      </div>
    </main>
  );
};

export default Material;
