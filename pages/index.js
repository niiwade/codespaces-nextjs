import { useCallback, useEffect, useState } from 'react'
import Button from '../components/Button'
import ClickCount from '../components/ClickCount'
import styles from '../styles/home.module.css'

function throwError() {
  console.log(
    // The function body() is not defined
    document.body()
  )
}

function Home() {
  const [count, setCount] = useState(0)
  const increment = useCallback(() => {
    setCount((v) => v + 1)
  }, [setCount])

  useEffect(() => {
    const r = setInterval(() => {
      increment()
    }, 1000)

    return () => {
      clearInterval(r)
    }
  }, [increment])

  return (
    <main >
<div style={{
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
height: '100vh',
fontSize: '30px',
fontWeight: 'bold'
}}>
 <p>Hello World</p>
</div>
     
    
    </main>
  )
}

export default Home
