import { useEffect, useRef, useState } from "react";

export const useOnScreen = (options: IntersectionObserverInit): [React.RefObject<Element>, boolean] => {
  const ref = useRef<Element>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, visible];
};
