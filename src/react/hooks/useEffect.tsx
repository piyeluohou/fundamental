import { useEffect, useState } from 'react';

export function Search({ keyword }: { keyword: string }) {
  const [result, setResult] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    fetch(`/api/search?q=${keyword}`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setResult(data.result);
      });
    return () => {
      controller.abort();
    };
  }, [keyword]);

  return <div>{result}</div>;
}

export function Search2(keyword: string) {
  const [result, setResult] = useState('');
  useEffect(() => {
    let flag = false;
    fetch(`api/search/${keyword}`)
      .then((res) => res.json())
      .then((data) => !flag && setResult(data.result));
    return () => {
      flag = true;
    };
  }, [keyword]);

  return <div>{result}</div>;
}
