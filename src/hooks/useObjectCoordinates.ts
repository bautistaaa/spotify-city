import { useCallback, useEffect, useState } from 'react';

const useObjectCoordinates = () => {
  const [el, setEl] = useState<HTMLElement | null>(null);
  const [bounds, setBounds] = useState<DOMRect>();
  // https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node
  const ref = useCallback((node: HTMLElement) => {
    if (node !== null) {
      setEl(node);
    }
  }, []);

  useEffect(() => {
    if (el !== null) {
      setBounds(el.getBoundingClientRect());
    }
  }, [el]);

  return [ref, bounds];
};

export default useObjectCoordinates;
