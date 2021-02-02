import { useEffect } from 'react';

const useIframe = (source: string | null) => {
  useEffect(() => {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      iframe.src = source ?? '';
    }
    return () => {
      if (iframe) {
        iframe.src = '';
      }
    };
  }, [source]);
};

export default useIframe;
