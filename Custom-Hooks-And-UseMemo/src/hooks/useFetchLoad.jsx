import { useEffect } from "react";
import { useState } from "react"

const useFetchLoad = (url) => {

    let [loading, setLoading] = useState(true);
    let [error, setError] = useState(null);
    let [data, setData] = useState(null);

    let fetchData = async () => {
        try {
            let res = await fetch(url);
            let bag = await res.json();
            setData(bag);
        }
        catch (error) {
            setError(error);
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url])

    return { loading, error, data }

}

export default useFetchLoad