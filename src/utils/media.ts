import {useEffect, useMemo, useState} from "react";

export const useMediaQuery = (query: string) => {
    const mediaQuery = useMemo<MediaQueryList | false>(() => {
        if (typeof window === 'undefined') {
            return false;
        }
        return window.matchMedia(query);
    }, [query]);
    const [match, setMatch] = useState(mediaQuery && mediaQuery.matches);

    useEffect(() => {
        if (mediaQuery) {
            const onChange = () => setMatch(mediaQuery.matches);
            mediaQuery.addEventListener("change", onChange);

            return () => mediaQuery && mediaQuery.removeEventListener("change", onChange);
        }
    }, [mediaQuery]);

    return match;
}