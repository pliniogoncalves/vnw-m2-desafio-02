import { useState } from "react";

export default function Main(){

  const [numero, setNumero] = useState(0);

  const aumentar = () => {
    if(numero >= 0 && numero <10) setNumero(numero + 1);
  }

  const diminuir = () => {
    if(numero>0) setNumero(numero - 1);
  }

    return(
        <>
         <main>
             <section>
                    <p>{numero}</p>
                    <button onClick={diminuir}>menos</button>
                    <button onClick={aumentar}>mais</button>
                </section>
         </main>
        </>
    )
}