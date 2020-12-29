import { ChangeEvent } from "react";
import styles from "./TextInput.module.scss";

interface Props {
  name: string;
  label: string;
  value: string;
  rows?: number;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  onChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    value: string
  ) => void;
  placeholder?: string;
}
const TextInput: React.FC<Props> = ({
  name,
  label,
  value,
  rows,
  onChange,
  placeholder,
  disabled,
  required,
  error,
}) => {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    onChange(e, e.target.value);
  };
  return (
    <div className={styles.wrapper}>
      <label>{label}</label>
      <div className={styles.field}>
        {rows ? (
          <textarea
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            rows={rows}
            disabled={disabled}
            required={required}
          />
        ) : (
          <input
            name={name}
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            disabled={disabled}
            required={required}
          />
        )}
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default TextInput;
