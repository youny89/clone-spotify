/**
 * i don't want to refetch our songs on every single input we write 
 * so i want to add a bit of a delay so that when user stops typing 
 * that's when we're going to refresh the songs.
 */

import { useEffect, useState } from "react"


function useDebounce<T>(value:T, delay?:number):T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay || 500)

        return () => {
            clearTimeout(timer);
        }
    },[value, delay])

    return debouncedValue;
}

export default useDebounce