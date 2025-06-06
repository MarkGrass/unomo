import { useEffect, useState } from 'react';

export const useResize = () => {
    const [isMobile, setIsMobile] = useState(true);
    const [isTablet, setIsTablet] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
        setIsTablet(window.innerWidth < 1200);
        setIsDesktop(window.innerWidth >= 1200);
    }

    useEffect(() => {
        handleResize();
        document.addEventListener('resize', handleResize);

        return () => {
            document.removeEventListener('resize', handleResize);
        }
    }, []);

    return {
        isMobile,
        isTablet,
        isDesktop,
    };
}