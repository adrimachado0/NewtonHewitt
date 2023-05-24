import React, { useRef } from "react"

const ScrollToTopAnimation = ({targetElement}) => {
    const targetElementRef = useRef(null);  
    const scrollToTop = () => {
        const targetElement = targetElementRef.current;
        if (targetElement) {
          targetElement.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }
    };
}

export default ScrollToTopAnimation