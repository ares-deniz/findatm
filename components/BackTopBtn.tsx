'use client';

import { MoveUp } from 'lucide-react';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const BackTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    e.preventDefault(); // Prevent the default behavior of the link

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop, // Get the top position of the target element
        behavior: 'smooth', // Enable smooth scrolling
      });
    }
  };

  return (
    <div className="flex fixed bottom-8 right-8">
      {isVisible && (
        <Link
          href="#home"
          onClick={(e) => handleScroll(e, 'home')}
          className="border border-emerald-800 rounded-full p-2 bg-green-600"
        >
          <MoveUp className="h-5 w-5 text-emerald-50 cursor-pointer" />
        </Link>
      )}
    </div>
  );
};

export default BackTopButton;
