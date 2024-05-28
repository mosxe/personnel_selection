import { useState } from 'react';
import Iframe from 'components/Iframe';
import { useLazyActiveAssessmentQuery } from 'store/apiSlice';
import classNames from 'classnames';
import styles from './styles.module.scss';

type Props = {
  id: string;
  assessmentId: string;
  stateId: string;
  statusName: string;
  link: string;
  score: string;
  maxScore: string;
  finishDate: string;
  updateData: () => Promise<any>;
  updateMaterial: (id: string) => Promise<any>;
};

const Assessment = ({
  id,
  assessmentId,
  stateId,
  statusName,
  link,
  score,
  maxScore,
  finishDate,
  updateData,
  updateMaterial
}: Props): JSX.Element => {
  const [activeAssessment, { isFetching }] = useLazyActiveAssessmentQuery({
    refetchOnFocus: false
  });
  const [linkAssessment, setLinkAssessment] = useState<string>(link);
  const [isShowIframe, setShowIframe] = useState<boolean>(false);

  const handleShowIframe = async () => {
    setShowIframe(!isShowIframe);
    await updateMaterial(id);
    await updateData();
  };

  const handleClick = async () => {
    if (stateId === '0' || stateId === '1') {
      setShowIframe(true);
    } else {
      const payload = await activeAssessment(assessmentId);
      if (payload.data !== undefined && !payload.data.isError) {
        setLinkAssessment(payload.data.link);
        setShowIframe(true);
      }
    }
  };

  const buttonName =
    stateId === '1'
      ? 'ПРОДОЛЖИТЬ ПРОХОЖДЕНИЕ'
      : stateId === '3'
      ? 'ПОПРОБОВАТЬ ЕЩЕ РАЗ'
      : stateId === '4'
      ? 'ПРОЙТИ ТЕСТ ПОВТОРНО'
      : 'ПРОЙТИ ТЕСТ';

  const classNameStatus = classNames(styles['assessment__status'], {
    [styles['assessment__status--failed']]: stateId === '3'
  });

  const scoreName = maxScore === '' ? score : `${score} из ${maxScore}`;

  return (
    <>
      <div className={styles['assessment']}>
        <div className={styles['assessment__content']}>
          {isFetching && (
            <div className={styles.assessment__wrapper}>
              <div className={styles.assessment__loader}></div>
            </div>
          )}
          <div className={styles['assessment__container']}>
            <span className={classNameStatus}>ТЕСТ {statusName}</span>
            <div>
              <strong>Набранный балл: </strong>
              <span className={styles['assessment__score']}>{scoreName}</span>
            </div>
            <div className={styles['assessment__date']}>
              <strong>Дата последней попытки: </strong>
              <span>{finishDate}</span>
            </div>
            <button
              type='button'
              className={styles.assessment__button}
              onClick={handleClick}
            >
              {buttonName}
            </button>
          </div>
        </div>
      </div>
      <Iframe
        isShow={isShowIframe}
        onClose={handleShowIframe}
        link={linkAssessment}
      />
    </>
  );
};

export default Assessment;
