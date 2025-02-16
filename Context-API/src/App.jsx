import React from 'react'
import Parent from './components/Parent'
import Child from './components/Child'
import GrandChild from './components/GrandChild'

const App = () => {
  return (
    <div>
        <Parent/>
        <Child/>
        <GrandChild/>
    </div>
  )
}

export default App