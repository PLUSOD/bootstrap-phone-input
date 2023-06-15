import { useState } from 'react'
import BootstrapPhoneInput from './components/useBootstrapPhone';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BootstrapPhoneInput />
    </>
  )
}

export default App
