// products.jsx

import { useState, useEffect } from "react";

export function useFetch (url) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        if (loading !== true || error !== null){
            setLoading(true)
            setError(null)
        }
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`)
                }

                const json = await response.json()
                setData(json)
                
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        fetchData()

    },[url])

    return {data, loading, error}
}