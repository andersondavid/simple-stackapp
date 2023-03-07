import { useEffect, useState } from "react";
import fetchDatabase from "./api/fetchDatabase";

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    const dataRequest = async () => {
      const results = await fetchDatabase()
      setData(results)
    }
    dataRequest();

  }, [])

  return (
    <div className="App">
      {data && data.map(item => (
        <>
          <p>Nome: {item.nome}</p>
          <p>Email: {item.email}</p>
          <p>Idade: {item.idade}</p>
        </>
      ))}
    </div>
  );
}

export default App;
