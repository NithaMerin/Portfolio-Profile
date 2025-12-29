import { useEffect, useState, useRef } from 'react';

export const useReveal = (options = {}) => {
    const [revealed, setRevealed] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setRevealed(true);
                if (options.once !== false) {
                    observer.unobserve(entry.target);
                }
            } else if (options.once === false) {
                setRevealed(false);
            }
        }, {
            threshold: 0.1,
            ...options
        });

        const currentRef = elementRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [options]);

    return { revealed, elementRef, className: revealed ? 'revealed' : 'reveal' };
};
