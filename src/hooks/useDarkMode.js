import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
    useEffect(() => {
        darkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');
    }, [darkMode])
    return [darkMode, setDarkMode];
}