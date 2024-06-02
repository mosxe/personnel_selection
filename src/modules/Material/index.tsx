import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useWindowSize } from 'hooks/useWindowSize';
import { Main as MainLayout, Layout } from 'components/Layout';
import Loader from 'components/Loader';
import Error from 'components/Error';
import Content, { Description, Speakers, Files } from './components/Content';
import Video from './components/Video';
import Assessment from './components/Assessment';
import Button from './components/Button';
import {
  useGetMaterialQuery,
  useLazyGetMaterialQuery,
  useLazyUpdateStatusMaterialQuery,
  useLazyGetDataQuery
} from 'store/apiSlice';
import styles from './styles.module.scss';

const Material = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetMaterialQuery(id, {
    refetchOnFocus: false
  });
  const [updateMaterial] = useLazyGetMaterialQuery({
    refetchOnFocus: false
  });
  const [updateStatus] = useLazyUpdateStatusMaterialQuery({
    refetchOnFocus: false
  });

  const [updateData] = useLazyGetDataQuery({ refetchOnFocus: false });
  const [isShowAssessment, setShowAssessment] = useState<boolean>(false);
  const [time, setTime] = useState<string>('');
  const [width] = useWindowSize();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const handleShowAssessment = (isSwitchAssessment: boolean) => {
    setShowAssessment(isSwitchAssessment);
  };

  if (isLoading) {
    return (
      <MainLayout>
        <Layout>
          <Loader />
        </Layout>
      </MainLayout>
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
      <MainLayout>
        <Layout>
          <Error message='Материал не найден. Обратитесь в техническую поддержку портала.' />
        </Layout>
      </MainLayout>
    );
  }

  if (data.role === 'guest') {
    return (
      <MainLayout>
        <Layout>
          <Error message='Недостаточно прав доступа.' />
        </Layout>
      </MainLayout>
    );
  }

  const title =
    isShowAssessment && data.assessment !== null
      ? data.assessment.title
      : data.data.title;

  return (
    <>
      <MainLayout>
        <div className={styles['material']}>
          {width < 768 && (
            <div className={styles.material__content}>
              <Description description={data.data.content} />
              <Speakers speakers={data.data.speakers} />
            </div>
          )}
          <div className={styles['material__video']}>
            <div className={styles['material__header']}>
              <div className={styles['material__wrapper']}>
                <span className={styles['material__title']}>{title}</span>
                {data.data.desc && (
                  <span className={styles['material__subtitle']}>
                    {data.data.desc}
                  </span>
                )}
              </div>
              {time !== '' && !isShowAssessment && (
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
              {data.assessment !== null && isShowAssessment ? (
                <Assessment
                  id={id}
                  assessmentId={data.assessment.id}
                  stateId={data.assessment.state_id}
                  statusName={data.assessment.status_name}
                  link={data.assessment.link}
                  score={data.assessment.score}
                  maxScore={data.assessment.max_score}
                  finishDate={data.assessment.finish_date}
                  updateMaterial={updateMaterial}
                  updateData={updateData}
                />
              ) : (
                <Video
                  id={id}
                  link={data.data.link}
                  status={data.data.status}
                  onFormatedTime={formatedTime}
                  updateData={updateData}
                  updateStatus={updateStatus}
                />
              )}
              {data.assessment !== null && (
                <Button
                  isShowAssessment={isShowAssessment}
                  handleClick={handleShowAssessment}
                />
              )}
            </div>
          </div>
          {width > 767 ? (
            <Content
              description={data.data.content}
              speakers={data.data.speakers}
              files={data.data.files}
              onClick={handleShowAssessment}
            />
          ) : (
            <Files files={data.data.files} onClick={handleShowAssessment} />
          )}
        </div>
      </MainLayout>
    </>
  );
};

export default Material;
