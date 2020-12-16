import { useEffect, useMemo, useState } from "react";
import styles from "./AnimatedHeader.module.scss";

interface Props {
  children: string;
}
const AnimatedHeader: React.FC<Props> = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const parts = useMemo(() => (children ? children.split(" ") : []), [
    children,
  ]);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 220);
  }, []);

  return (
    <div className={styles.wrapper}>
      {parts.map((part, i) => (
        <div key={`${part}-${i}`} className={styles.mask}>
          <div
            className={`${styles.text} ${visible && styles.visible}`}
            style={{ animationDelay: 120 * i + 1 + 100 + "ms" }}
          >
            {part}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedHeader;
