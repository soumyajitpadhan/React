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


// import { useEffect, useState } from "react";

// const useFetch = (url) => {
//     const [loading, setLoading] = useState(true);
//     const [data, setData] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         let isMounted = true; // Prevent state update after unmount

//         const fetchData = async () => {
//             setLoading(true);
//             try {
//                 let res = await fetch(url);
//                 if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
//                 let bag = await res.json();
//                 if (isMounted) setData(bag);
//             } catch (err) {
//                 if (isMounted) setError(err);
//                 console.error(err);
//             } finally {
//                 if (isMounted) setLoading(false);
//             }
//         };

//         fetchData();

//         return () => {
//             isMounted = false;
//         };
//     }, [url]);

//     return { loading, data, error };
// };

// export default useFetch;
