import { useEffect } from 'react';

function Cup() {
  let guest = 0;
  // Bad：正在更改预先存在的变量！
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  useEffect(() => {}, []);
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}
