import React, { useMemo, useState } from 'react';
import { useLocation } from 'react-router';

const Navbar = () => {
  const [isHidden, setHidden] = useState(false);
  const location = useLocation();

  useMemo(() => {
    if (location.pathname.includes('/signin') || location.pathname.includes('/signup'))
      setHidden(true);
  }, [location.pathname]);

  return (
    <div className={` ${isHidden ? 'hidden' : ''} h-12 bg-yellow-100`}>
      <p>nav</p>
    </div>
  );
};

export default Navbar;
