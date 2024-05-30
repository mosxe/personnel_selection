import { useState } from 'react';
import Card from '../../../Card';
import { IDataItem } from 'types';
import styles from './styles.module.scss';

type Props = {
  data: IDataItem[];
};
const Section = ({ data }: Props) => {
  const COUNT_CARDS = 6;
  const [isShowAll, setShowAll] = useState<boolean>(false);

  const dataCards =
    data.length > COUNT_CARDS && !isShowAll ? data.slice(0, COUNT_CARDS) : data;

  return (
    <>
      <div className={styles.wrapper}>
        {dataCards.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
      {data.length > COUNT_CARDS && (
        <button
          className={styles['btn-show']}
          type='button'
          onClick={() => setShowAll(!isShowAll)}
        >
          {isShowAll ? 'Скрыть все' : 'Показать все'}
        </button>
      )}
    </>
  );
};

export default Section;
