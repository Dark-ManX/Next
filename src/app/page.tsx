"use client";

// import "styles/tailwind.css";
import Header from "./Header";
import Button from "@/components/Button/Button";
import Navigation from "@/components/Navigation/Navigation";
import { MouseEvent, useState } from "react";

export default function Page() {
  const [counter, setCounter] = useState(0);
  const [scroll, setScroll] = useState<null | "up" | "down">(null);
  const cardArr = ["income", "spent", "currency", "weather"];

  function handleClick(e: MouseEvent) {
    const {
      dataset: { action },
    } = e.currentTarget as HTMLElement;
    if (action === "up") {
      setScroll(action);

      if (counter === 0) return setCounter(3);
      setCounter(counter - 1);
      return;
    } else if (action === "down") {
      setScroll(action);
      if (counter === cardArr.length - 1) return setCounter(0);
      setCounter(counter + 1);
    }
  }
  console.log("page", counter);

  return (
    <>
      <Header />
      <main className={`flex`}>
        <aside className={`w-3/12 h-full p-14 bg-purple-300 px-7 py-28`}>
          <p className={`text-3xl font-bold text-center text-white`}>Menu</p>
          <Navigation idx={counter} scrolling={scroll} cards={cardArr} />

          {/* <nav className={`mt-20`}>
            <ul className={`text-white overflow-hidden h-full`}>
              <li
                className={`rounded-[20px] overflow-hidden mb-10 relative h-80 top-2/3 w-full h-full bg-green-500 p-[20px] text-center`}
              >
                <div className={`w-full h-full bg-green-500`}>Income</div>
                <p className={`text-[25px] font-semibold uppercase`}>Income</p>
              </li>
              <li className={`rounded-lg overflow-hidden mb-10`}>
                <div className={`w-full bg-red-400`}>Spent</div>
              </li>
              <li className={`rounded-lg overflow-hidden mb-10`}>
                <div className={`w-full bg-indigo-600`}>Currency</div>
              </li>
              <li className={`rounded-lg overflow-hidden mb-10`}>
                <div className={`w-full bg-sky-300`}>Weather</div>
              </li>
            </ul>
          </nav> */}
          <Button
            handleClick={handleClick}
            action={"up"}
            style={`rounded-full w-10 h-10 absolute top-44 left-40 origin-center rotate-45 bg-purple-700 hover:bg-purple-500`}
            el={
              <p
                className={`border-l-4 border-t-4 border-white w-5 h-5 relative left-3 top-0.5`}
              ></p>
            }
          />
          <Button
            handleClick={handleClick}
            style={`rounded-full w-10 h-10 absolute top-[560px] left-40 origin-center rotate-[225deg] bg-purple-700 hover:bg-purple-500`}
            action={"down"}
            el={
              <p
                className={`border-l-4 border-t-4 border-white w-5 h-5 relative left-3 top-0.5`}
              ></p>
            }
          />
        </aside>
        <div>
          <h1
            className={`absolute text-8xl font-bold top-[257px] left-[520px] z-10`}
          >
            Personal wallet
          </h1>
          <p
            className={`text-8xl font-bold mt-[275px] ml-[180px] text-gray-500 skew-x-[-45deg] scale-y-[0.5] blur-sm`}
          >
            Personal wallet
          </p>
        </div>
      </main>
      <footer>
        <p>If you have some proposals contact us</p>
        <form action="">
          <input type="text" />
          <textarea name="" id="" cols={30} rows={10}></textarea>
          <button>Send</button>
        </form>
      </footer>
    </>
  );
}
