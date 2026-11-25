import { useEffect, useState, type JSX } from 'react';

function Demo1(): JSX.Element {
  const [account, setAccount] = useState(0);
  useEffect(() => {
    console.log('account---', account);
    return () => {
      console.log('account===', account);
    };
  }, [account]);

  const click = () => {
    setAccount(account + 1);
  };

  return (
    <>
      <button onClick={click}>数字{account}</button>
      <button onClick={click}>数字{account}</button>
      <button onClick={click}>数字{account}</button>
    </>
  );
}

export default Demo1;
