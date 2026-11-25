import { useState } from 'react';

const useCount = () => {
  const [count, setCount] = useState(0);
  const increase = (num: number) => {
    setCount((prev) => prev + num);
  };

  return { count, increase };
};

const Hook1 = () => {
  const { count, increase } = useCount();
  return (
    <button
      onClick={() => {
        increase(2);
      }}
    >
      {count}
    </button>
  );
};

export { Hook1, useCount };
