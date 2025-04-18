
import { useEffect, useRef } from 'react';

const RevealOnScroll = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const revealPoint = 150;

      revealElements.forEach((element) => {
        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - revealPoint) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Initial check for elements already in viewport on load
    revealOnScroll();

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return null;
};

export default RevealOnScroll;
