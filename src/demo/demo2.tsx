import React, { useCallback, useEffect, useRef, useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleClick = useCallback(() => {
    setCount((current) => current + 1);
    countRef.current += 1;
  }, []);

  useEffect(() => {
    console.log('Effect:', count, countRef.current);

    return () => {
      console.log('Cleanup:', count, countRef.current);
    };
  }, [count]);

  useEffect(() => {
    console.log('111111');
  });

  return <button onClick={handleClick}>{count}</button>;
}

export { Counter as Demo2 };
