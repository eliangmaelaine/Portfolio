import React, { useEffect, useState } from 'react';

function PageWrapper({ children }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); // fade in on mount
    return () => setShow(false); // optional: fade out on unmount
  }, []);

  return (
    <div
      className={`transition-opacity duration-500 ${
        show ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
}

export default PageWrapper;
