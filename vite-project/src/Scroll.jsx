import React, { useState, useEffect, useRef } from 'react';

const Scroll = ({ items }) => {
  const [scrollPos, setScrollPos] = useState(0);
  const listRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      // Increase scroll position by a small amount
      setScrollPos(prevPos => prevPos + 1);
    }, 100); // Adjust the interval as needed

    return () => clearInterval(scrollInterval);
  }, []); // Only run once when component mounts

  useEffect(() => {
    if (listRef.current) {
      // Scroll the list to the current position
      listRef.current.scrollTop = scrollPos;
    }
  }, [scrollPos]);

  return (
    <div style={{ height: '300px', overflow: 'auto' }} ref={listRef}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Scroll;
