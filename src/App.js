import React, { useState } from "react";
import { InputSample } from "./InputSample";
import { UserList } from "./UserList";
import "./App.css";

function App() {
  // const [number, setNumber] = useState(0);
  // const countUp = () => {
  //   setNumber((prev) => prev + 1);
  // };

  // const countDown = () => {
  //   setNumber((prev) => prev - 1);
  // };
  return (
    // <>
    //   <h1>{number}</h1>
    //   <button onClick={countUp}>+</button>
    //   <button onClick={countDown}>-</button>
    // </>
    <>
      {/* <InputSample /> */}
      <UserList users={users} />
    </>
  );
}
const users = [
  {
    id: 1,
    username: "velopert",
    email: "public.velopert@gmail.com",
  },
  {
    id: 2,
    username: "tester",
    email: "tester@example.com",
  },
  {
    id: 3,
    username: "liz",
    email: "liz@example.com",
  },
];

export default App;
