import { useState } from 'react';
import Pessoa from '../components/Pessoa';

export default function Home() {
  const [idadeGilmar, setIdadeGilmar] = useState(34);

  const incrementaIdadeGilmar = () => {
    setIdadeGilmar(++idadeGilmar);
  }

  return (
    <>
      <h1>Ola Mundo! {process.env.NEXT_PUBLIC_TESTE}</h1>
      <Pessoa nome='Gilmar' idade={idadeGilmar}/>
      <Pessoa nome='Ana Cristina' idade={35}/>

      {pessoas.map(({ nomePessoa, idadePessoa}, index) => {
        return<Pessoa
        nome={nomePessoa}
        idade={idadePessoa}
        key={index}
        />
      })}
    </>
  )
}



