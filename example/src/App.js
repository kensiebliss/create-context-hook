import React from 'react'
import { useMyHook } from 'create-context-store'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App