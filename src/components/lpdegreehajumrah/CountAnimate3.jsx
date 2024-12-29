import React, { useRef, useEffect, useState } from 'react';
// import CountUp from 'react-countup';

const CountAnimate3 = () => {
  const countRef = useRef(0);
  const countElementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Adjust as needed
      }
    );

    if (countElementRef.current) {
      observer.observe(countElementRef.current);
    }

    return () => {
      if (countElementRef.current) {
        observer.unobserve(countElementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let timer;
    if (isVisible) {
      const updateCount = () => {
        if (countRef.current < 567) {
          countRef.current += 1;
          if (countElementRef.current) {
            countElementRef.current.innerText = countRef.current;
          }
        } else {
          clearInterval(timer);
        }
      };
      timer = setInterval(updateCount, 10); // Update every 100 milliseconds
    } else {
      countRef.current = 0; // Reset count when not visible
    }

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
      <div className="flex grid-cols-2 space-x-4">
      <div className="flex justify-end w-full">
          <span ref={countElementRef} className="text-5xl flex items-center font-bold">0</span>
        </div>
        <div className="grid justify-start w-full">
        <h1 className="text-2xl font-semibold ">Alumni</h1>
        <h1 className="text-2xl font-normal text-slate-500"></h1>
        </div> 
      </div>
  );
};
export default CountAnimate3;
