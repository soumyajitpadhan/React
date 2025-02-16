import { useState } from 'react'

const useInputValues = (initialValue) => {
    let [value, setValue] = useState(initialValue);

    let handleChange = (e) => {
        setValue(e.target.value);
    }

    return {
        value,
        onChange: handleChange,
        reset: () => setValue("")
    }

}

export default useInputValues