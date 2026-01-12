import { useEffect, useLayoutEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

function ScrollToTop() {
    const { pathname } = useLocation();
    const action = useNavigationType();

    // 1. Disable browser's default scroll restoration to avoid conflicts
    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        // Reset to auto when unmounting app (optional/good practice)
        return () => {
            if ('scrollRestoration' in window.history) {
                window.history.scrollRestoration = 'auto';
            }
        };
    }, []);

    // 2. Continuously save scroll position
    useEffect(() => {
        const handleScroll = () => {
            // Only save if we are not at absolute top (unless we want to save 0)
            // and simpler: just save everything.
            sessionStorage.setItem(`scrollPos:${pathname}`, window.scrollY.toString());
        };

        // Throttling could be added here if performance is an issue, but standard scroll listener is usually fine for just setting a variable
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    // 3. Restore logic with retry mechanism for async content
    useLayoutEffect(() => {
        if (action === 'POP') {
            const savedPos = sessionStorage.getItem(`scrollPos:${pathname}`);
            if (savedPos) {
                const targetY = parseInt(savedPos, 10);

                // Attempt to scroll immediately
                window.scrollTo(0, targetY);

                // Retry for a short duration to catch async content loading (Home/Journey/Donate fetch data)
                const startTime = Date.now();
                const attemptScroll = () => {
                    // correct position reached?
                    if (Math.abs(window.scrollY - targetY) < 10) return;

                    // Page not tall enough yet?
                    if (document.documentElement.scrollHeight < targetY) {
                        // Still waiting for content, keep trying
                        window.scrollTo(0, targetY);
                    } else {
                        // Page is tall enough, force scroll
                        window.scrollTo(0, targetY);
                    }

                    // Continue for 500ms
                    if (Date.now() - startTime < 500) {
                        requestAnimationFrame(attemptScroll);
                    }
                };

                requestAnimationFrame(attemptScroll);
            }
        } else {
            // New navigation -> Top
            window.scrollTo(0, 0);
        }
    }, [pathname, action]);

    return null;
}

export default ScrollToTop;
