'use client'

import qs from "query-string"
import { useRouter } from 'next/navigation'
import { useState,useEffect } from 'react'

import useDebounce from '@/hooks/useDeboune';
import Input  from "./Input";

const SearchInput = () => {
    const router = useRouter();
    const [value, setValue] = useState<string>("")
    const deboundedValue = useDebounce<string>(value,500)

    useEffect(() => {
        const query = {
            title : deboundedValue
        }

        const url = qs.stringifyUrl({
            url:'/search',
            query
        })

        router.push(url);

    }, [deboundedValue, router])

    

    return (
        <Input 
            placeholder="What do you want to listen ?"
            value={value}
            onChange={e => setValue(e.target.value)}
        />
    )
}

export default SearchInput