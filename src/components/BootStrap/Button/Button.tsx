import styles from "./Button.module.css";

interface Props {
  children?: string;
  color?: "primary" | "secondary" | "danger";
  onClick?: () => void;
}
function Button({ children, color, onClick }: Props) {
  return (
    <button className={[styles.btn, styles["btn-" + color]].join("")}>
      Click me
    </button>
  );
}

export default Button;
