import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState (() => {
        const savedValue = localStorage.getItem(key);

        if (savedValue === null)
            return initialValue;

        try {
            return JSON.parse(savedValue);
        } catch {
            return initialValue;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storedValue));
        }, [key, storedValue]);

        return [storedValue, setStoredValue];
};

export default useLocalStorage;