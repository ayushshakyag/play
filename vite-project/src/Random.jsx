import React from 'react';
import Scroll from './Scroll';

const Random = () => {
  // Generate a random list of items
  const generateRandomList = () => {
    const numItems = Math.floor(Math.random() * 10) + 5; // Generate between 5 to 14 items
    const randomList = Array.from({ length: numItems }, (_, index) => `Item ${index + 1}`);
    return randomList;
  };

  const randomItems = generateRandomList();

  return (
    <div>
      <h2>Random List</h2>
      <Scroll items={randomItems} />
    </div>
  );
};

export default Random;
