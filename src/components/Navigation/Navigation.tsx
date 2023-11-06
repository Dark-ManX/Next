import { FC, useState, useEffect } from "react";
import Image from "next/image";
import svg from "./symbol-defs.svg";
import "./styles.scss";
import shortId from "shortid";
import Link from "next/link";

interface IProps {
  idx: number;
  scrolling: null | "up" | "down";
  cards: string[];
}

const Navigation: FC<IProps> = ({ idx, scrolling, cards }) => {
  const [counter, setCounter] = useState(0);
  console.log(idx, scrolling);
  function handleCondition(el: string, arg: string | null) {
    if (idx === cards.indexOf(el) && arg === "up")
      return " list-item__appear-bottom";
    else if (idx === cards.indexOf(el) && arg === "down")
      return " list-item__appear-top";
  }

  return (
    <nav className={`mt-20 w-full h-auto`}>
      <ul className={`text-white overflow-hidden h-[320px] relative`} id="list">
        {cards.map((el) => (
          <li
            key={shortId.generate()}
            className={`list-item ${el} 
            
            ${handleCondition(el, scrolling)}`}
          >
            <Link href={}>
              <p>{el}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
