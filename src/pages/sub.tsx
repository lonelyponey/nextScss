import { NextPage } from 'next';
import Head from 'next/head'
import { useState } from 'react';
import { useRouter } from 'next/router';

// renderiza paginas com otimizacao 
const Home: NextPage = () => {
  
  // tipar uma funcao em ts com <>
  const [sub, setSub] = useState<number>(0);
  const router = useRouter()

  const Subtrair = (): number => {
    setSub(sub - 1)  
    return sub
  }

  const RotaSomar = () => {
    router.push("/")
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* funcao anonima */}
          <button onClick={() => Subtrair()}>subtrair</button>
          <p>{sub}</p>
          <button onClick={() => RotaSomar()}>ir Somar</button>
          {/* <button>menos</button> */}
      </main>
    </>
  )
}

export default Home;