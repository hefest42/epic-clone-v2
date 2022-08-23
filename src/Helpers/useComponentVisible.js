import React, { useState, useRef, useEffect } from "react";

function useComponentVisible(initialIsVisible) {
    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        setTimeout(() => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsComponentVisible(false);
            }
        }, 50);
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);

        return () => document.removeEventListener("click", handleClickOutside, true);
    }, []);

    return { ref, isComponentVisible, setIsComponentVisible };
}

export default useComponentVisible;
