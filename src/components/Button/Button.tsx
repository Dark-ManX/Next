import { MouseEvent, FC } from "react";

interface IProps {
  action: "up" | "down";
  style: string;
  text?: string;
  el: JSX.Element;
  handleClick: (e: MouseEvent) => void;
}

const Button: FC<IProps> = ({ action, style, text, el, handleClick }) => {
  return (
    <button
      type="button"
      data-action={action}
      className={style}
      onClick={handleClick}
    >
      {text}
      {el}
    </button>
  );
};

export default Button;
