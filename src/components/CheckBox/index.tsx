import { InputHTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox = ({ id, label, checked = false, onChange }: Props) => {
  const tagId = `tag_${id}`;
  const className = checked
    ? `${styles.checkbox} ${styles.checkbox_checked}`
    : styles.checkbox;
  return (
    <div className={className}>
      <label htmlFor={tagId} className={styles.checkbox__label}>
        <input
          id={tagId}
          type='checkbox'
          checked={checked}
          onChange={onChange}
        />
        <span className={styles.checkbox__value}></span>
        <div className={styles.checkbox__text}>
          <span>{label}</span>
        </div>
      </label>
    </div>
  );
};

export default CheckBox;
