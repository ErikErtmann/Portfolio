// To create a page that is positioned to the right and is reachable 
// by a button in React, you can use the style attribute and set the position 
// property to absolute and the right property to 0. This will position the page 
// absolutely at the right edge of its containing element. Then, you can create a 
// button that, when clicked, will use the window.scrollTo() function to scroll to 
// the right page.

import { useState } from 'react';

const MyComponent = () => {
  const [showRightPage, setShowRightPage] = useState(false);

  const handleClick = () => {
    setShowRightPage(true);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <button onClick={handleClick}>
        Click me to scroll to the right page!
      </button>
      {showRightPage && (
        <div style={{ position: 'absolute', right: 0 }}>
          This page is positioned to the right.
        </div>
      )}
    </>
  );
};
