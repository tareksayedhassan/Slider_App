import React, { useEffect, useRef, useState } from "react";

const Test = () => {
  const [Timer, setTimer] = useState(0);
  const intervalRef = useRef(null);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  });
  return (
    <div>
      <h1> Timer - {Timer}</h1>
      <button onClick={() => clearInterval(intervalRef.current)}></button>
    </div>
  );
};
export default Test;
