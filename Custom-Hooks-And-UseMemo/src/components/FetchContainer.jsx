import React from 'react'
import useFetchLoad from '../hooks/useFetchLoad'

let URL = "https://jsonplaceholder.typicode.com/todos"

const FetchContainer = () => {

    let { loading, error, data } = useFetchLoad(URL);

    if (loading) {
        return <h3>Loading...</h3>
    }

    if (error) {
        return <h3>Error: {error}</h3>
    }

    return (
        <div>
            {data.length > 0 ? (
                data.map((ele) => (
                    <div>
                        <p><b>Title:</b>{ele.title}</p>
                    </div>
                ))
            ) : (<p>No data available</p>)}
        </div>
    )
}

export default FetchContainer