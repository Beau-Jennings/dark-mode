import {useLocalStorage} from "./useLocalStorage";

export const useDarkMode = () => {
    const [darkModeValue, setDarkModeValue] = useLocalStorage(false);
    return [darkModeValue, setDarkModeValue];
};