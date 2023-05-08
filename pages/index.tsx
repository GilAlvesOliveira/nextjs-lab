import { useState } from 'react';
import Pessoa from '../components/Pessoa';

export default function Home() {
  const [idadeGilmar, setIdadeGilmar] = useState(34);

  const incrementaIdadeGilmar = () => {
    setIdadeGilmar(++idadeGilmar);
  }

  return (
    <>
      <h1>Ola Mundo!</h1>
      <Pessoa nome='Gilmar' idade={idadeGilmar}/>
      <Pessoa nome='Ana Cristina' idade={35}/>
      <button onClick={incrementaIdadeGilmar}>Incrementa idade do Gilmar</button>
    </>
  )
}



