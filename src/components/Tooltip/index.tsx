import { Tooltip as ReactTooltip } from 'react-tooltip';
import HelpImage from 'assets/svg/help.svg';
import styles from './styles.module.scss';

type Props = {
  id: string;
  text: string;
};

const Tooltip = ({ id, text }: Props) => {
  return (
    <div className={styles.tooltip}>
      <img
        data-tooltip-id={id}
        data-tooltip-content={text}
        className={styles['section-title__help']}
        src={HelpImage}
        alt='Картинка'
      />
      <ReactTooltip id={id} className={styles.tooltip__label} />
    </div>
  );
};

export default Tooltip;
