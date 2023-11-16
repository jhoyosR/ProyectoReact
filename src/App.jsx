import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Juliana from './componentes/Juliana'
import Encabezado from './componentes/Encabezado'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Encabezado/>
     <blockquote cite="Esteban" >
      este es una frase celebre
     </blockquote>
     <Juliana/>
     <Juliana/>
     <Juliana/>
     <Juliana/>

    </>
  )
}

export default App
