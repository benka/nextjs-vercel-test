import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {

  const handleSubmit = async event => {
    try {
      const res = await fetch(`/api/test`, {
        body: JSON.stringify({msg:"test body"}),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })
      const result = await res.json();
      console.log(result)
    } catch (error) {
      console.error("handleSubmit error: ",error);
    }
  }



  return (
    <div>
      <Head>
        <title>Test Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          <div>Test APP</div>
        </h1>
        <p onClick={()=>{handleSubmit()}}>
          Test link to the API
        </p>
      </main>
      <style jsx>{`
        main {
          padding: 5em 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
