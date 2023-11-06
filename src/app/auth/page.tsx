"use client";
import { FC, SyntheticEvent, useState } from "react";

const Auth: FC = () => {
  interface IData {
    email: string;
    password: string;
    passwordConfirm: string;
  }

  interface IState {
    registered: boolean;
    email: boolean;
    password: boolean;
    confirm: boolean;
  }

  const formData: IData = {
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const initialState = {
    registered: false,
    email: false,
    password: false,
    confirm: false,
  };

  const [state, setState] = useState(initialState);
  const [data, setData] = useState(formData);

  function handleFocus(e: SyntheticEvent) {
    const { name, parentNode } = e.target as HTMLInputElement;
    setState((prevState) => ({ ...prevState }));
    // console.log(state[name]);
    const arr = Array.from(parentNode!.children);
    const el = arr.find(
      (el: any) => el.nodeName === "LABEL" && el?.htmlFor === name
    );
  }

  return (
    <div className={`w-screen h-screen bg-gray-900 opacity-60`}>
      <div
        className={`w-[600px] h-[400px] bg-purple-200 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[20px] p-[30px] text-center text-[20px]`}
      >
        <p className={`font-bold text-sky-500 text-3xl mb-[40px]`}>
          {!state.registered ? "Registration form" : "Please authorise"}
        </p>
        <form>
          <label
            htmlFor="email"
            className={
              `absolute top-[108px] left-[105px]` +
              "" +
              `${state.email || data.email ? "translate-y-[-30px]" : ""}`
            }
          >
            Email
          </label>
          <input
            onFocus={handleFocus}
            onBlur={handleFocus}
            name="email"
            type="text"
            className={`w-3/4 mb-[35px]`}
          />
          <label
            htmlFor="password"
            className={`absolute top-[140px] left-[105px]`}
          >
            Password
          </label>
          <input name="password" type="text" className={`w-3/4 mb-[35px]`} />
          <label
            htmlFor="passwordConfirm"
            className={`absolute top-[180px] left-[105px]`}
          >
            Confirm your&apos;s password
          </label>
          <input name="passwordConfirm" type="text" className={`w-3/4`} />
        </form>
      </div>
    </div>
  );
};

export default Auth;
