import React, { useState, useEffect, useRef } from 'react';

const Scroll = ({ items }) => {
  const [scrollPos, setScrollPos] = useState(0);
  const listRef = useRef(null);
  const itemHeight = 50; // Height of each item
  const visibleItems = 3; // Number of visible items in the box

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      // Increase scroll position by a small amount
      setScrollPos(prevPos => prevPos + 1);
    }, 50); // Adjust the interval as needed

    return () => clearInterval(scrollInterval);
  }, []); // Only run once when component mounts

  useEffect(() => {
    if (listRef.current) {
      // Reset scroll position when reaching the end of the duplicated list
      if (scrollPos >= items.length * itemHeight) {
        setScrollPos(0);
      }
      // Scroll the list to the current position
      listRef.current.style.transform = `translateY(-${scrollPos}px)`;
    }
  }, [scrollPos, items.length, itemHeight]);

  // Dynamically duplicate items to create an infinite loop effect
  const duplicatedItems = [...items, ...items];

  return (
    <div style={{ height: `${itemHeight * visibleItems}px`, overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%' }} ref={listRef}>
        <ul style={{ padding: 0, margin: 0 }}>
          {duplicatedItems.map((item, index) => (
            <li key={index} style={{ height: `${itemHeight}px`, lineHeight: `${itemHeight}px` }}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Scroll;
