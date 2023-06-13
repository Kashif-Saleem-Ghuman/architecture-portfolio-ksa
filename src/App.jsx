import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
      <div className='container'>
        <h2>
          Hello
        </h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, cumque! Unde nam quidem, et vel, veritatis cumque saepe modi fuga itaque, rerum ex neque est obcaecati natus eum odio repellendus?</p>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo numquam odit minus perferendis dolor. Incidunt fugit voluptatum, repellat excepturi aliquam unde, delectus ea deleniti nemo modi saepe cupiditate dolores obcaecati aspernatur nulla. Vero autem magnam voluptatibus aut doloremque corrupti quod.
          </p>
        </div>
      </div>
    </>
  )
}

export default App
