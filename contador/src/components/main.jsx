import { useState } from "react";

export default function Main(){

  const [numero, setNumero] = useState(0);
  const [numero2, setNumero2] = useState(0);

  const aumentar = () => {
    if(numero >= 0 && numero <10) setNumero(numero + 1);
  }

  const aumentar2 = () => {
    if(numero2 >= 0 && numero2 <10) setNumero2(numero2 + 1);
  }

  const diminuir = () => {
    if(numero>0) setNumero(numero - 1);
  }

  const diminuir2 = () => {
    if(numero2>0) setNumero2(numero2 - 1);
  }

  const zerar = () => {
    setNumero(0);
    setNumero2(0);
  }

  const trocar = () => {
    setNumero(numero2);
    setNumero2(numero);
  }
    return(
        <>
         <main>
             <section>
                <input type="text" name="time1" id="time1" />

                <input type="button" name="placar1" id="placar1" value={numero} />
                <input type="button" name="placar2" id="placar2" value={numero2} />

                <input type="text" name="time2" id="time2" />
                  <div className="break" />
                <button onClick={aumentar}>Aumentar Esquerda</button>
                <button onClick={aumentar2}>Aumentar Direita</button>
                <div className="break" />
                <button onClick={diminuir}>Diminuir Esquerda</button>
                <button onClick={diminuir2}>Diminuir Direita</button>
                <div className="break" />
                <button onClick={trocar}>Trocar</button>
                <div className="break" />
                <button onClick={zerar}>Zerar</button>
              </section>
         </main>
        </>
    )
}