import Card from '../../../Card';
import { IDataItem } from 'types';
import styles from './styles.module.scss';

type Props = {
  data: IDataItem[];
};
const Section = ({ data }: Props) => {
  if (!data.length) {
    return <div>Материалы отсутствуют</div>;
  }

  return (
    <div className={styles.wrapper}>
      {data.map((item, index) => (
        <Card key={index} />
      ))}
    </div>
  );
};

export default Section;
