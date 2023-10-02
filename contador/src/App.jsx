import { useState } from 'react';
import './App.css'

function App() {

  const [numero, setNumero] = useState(0);

  const aumentar = () => {
    if(numero >= 0 && numero <10) setNumero(numero + 1);
  }

  const diminuir = () => {
    if(numero>0) setNumero(numero - 1);
  }

  return (
    <>

      <section>
      <h1>Contador</h1>
      <p>{numero}</p>
      <button onClick={diminuir}>menos</button>
      <button onClick={aumentar}>mais</button>
      </section>

    </>
  )
}

export default App
