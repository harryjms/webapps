import styles from "./Button.module.scss";

interface Props {
  onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ children, onClick, disabled }) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
