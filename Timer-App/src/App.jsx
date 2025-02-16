// import React, { useEffect, useRef } from 'react'
// import { useState } from 'react'

// const App = () => {

//   const [time, setTime] = useState(0);
//   const intervalRef = useRef(null);

//   const startTimer = () => {
//     if (!intervalRef.current) {
//       intervalRef.current = setInterval(() => {
//         setTime((prev) => prev + 1);
//       }, 1000);
//     }
//   }

//   const stopTimer = () => {
//     clearInterval(intervalRef.current);
//     intervalRef.current = null;
//   }

//   const resetTimer = () => {
//     stopTimer();
//     setTime(0);
//   }

//   useEffect(() => {
//     return () => clearInterval(intervalRef.current);
//   }, [])

//   return (
//     <div>
//       <h1>{time}</h1>
//       <div>
//         <button onClick={startTimer}>Start</button>
//         <button onClick={resetTimer}>Reset</button>
//         <button onClick={stopTimer}>Stop</button>
//       </div>
//     </div>
//   )
// }

// export default App


import React, { useRef, useState } from 'react'

const App = () => {

  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  }

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  }

  const formatTime = (seconds) => {
    //Ex - 3665
    const hours = Math.floor(seconds / 3600); //Get hours
    const minutes = Math.floor((seconds % 3600) / 60); // Get minutes
    const secs = seconds % 60; // Get seconds
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${secs < 10 ? '0' + secs : secs}`
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>{formatTime(time)}</h1>
      <div style={{ display: "flex", gap: "15px" }}>
        <button onClick={startTimer} style={{ padding: "5px 10px", borderRadius: "5px", border: "2px solid red", cursor: "pointer" }}>Start</button>
        <button onClick={resetTimer} style={{ padding: "5px 10px", borderRadius: "5px", border: "2px solid red", cursor: "pointer" }}>Reset</button>
        <button onClick={stopTimer} style={{ padding: "5px 10px", borderRadius: "5px", border: "2px solid red", cursor: "pointer" }}>Stop</button>
      </div>
    </div>
  )
}

export default App