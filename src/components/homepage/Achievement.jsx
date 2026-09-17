import React, { useState, useEffect, useRef } from 'react';

// Data based on your new requirements
const achievementsData = [
  {
    endValue: 15140,
    suffix: '+',
    title: 'STUDENTS TRAINED',
  },
  {
    endValue: 80,
    suffix: '%',
    title: 'REPORTED STABLE INCOME',
  },
  {
    endValue: 5,
    suffix: '+',
    title: 'STRATEGIC PARTNERSHIPS',
  },
  {
    endValue: 18,
    suffix: '',
    title: 'MONTHS INDUSTRY EXPERIENCE',
  }
];

// Reusable Counter Component (now receives a signal to start)
const CountUp = ({ endValue, suffix, start, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function for smoother stop (easeOutQuart)
      const easeOutProgress = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeOutProgress * endValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(endValue); // Ensure it ends exactly on the number
      }
    };

    window.requestAnimationFrame(step);
  }, [start, endValue, duration]);

  // Format number with commas (e.g., 15,140)
  const formattedCount = count.toLocaleString('en-US');

  return <span>{formattedCount}{suffix}</span>;
};

const Achievement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: stop observing once triggered so it only animates once
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="achievement-section" ref={sectionRef}>
      <div className="achievement-grid">
        {achievementsData.map((item, index) => (
          <React.Fragment key={index}>
            {/* The stat block - gets 'reveal' class when visible */}
            <div className={`stat-block ${isVisible ? 'reveal' : ''}`}>
              
              <div className="stat-number">
                <CountUp endValue={item.endValue} suffix={item.suffix} start={isVisible} />
              </div>
              
              <div className="stat-title">{item.title}</div>
            </div>

            {/* Render divider except for the last item */}
            {index < achievementsData.length - 1 && (
              <div className={`stat-divider ${isVisible ? 'reveal' : ''}`}></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Achievement;