import React, { useEffect, useState } from 'react';
import Api from './services/api';
import { URL_PATHS } from './services/apiPaths';


function App() {
  const [email, setEmail] = useState('');


  const [dados, setDados] = useState<any | null>(null);
  const [erroMessage, setErroMessage] = useState<string | null>(null);
  const [stockData, setStockData] = useState({
    stock1Rate: null,
    stock2Rate: null,
  });


  useEffect(() => {
    // get assentos aqui
    const eventSource = new EventSource("http://localhost:3001/rates");

    // attaching a handler to receive message events
    eventSource.onmessage = (event) => {
      const stockData = JSON.parse(event.data);
      setStockData({ ...stockData });
    };

    // terminating the connection on component unmount
    return () => eventSource.close();

  }, []);


  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     const response = await Api.get(URL_PATHS.GET_USER, {
  //       // params: {
  //       //   email: emailPaciente,
  //       // },
  //     });

  //     setDados(response.data);
  //     setErroMessage(null);
  //   } catch (error) {
  //     setErroMessage('Erro de usuario');
  //     setDados(null);
  //   }
  // };


  const handleClick = async (number: number) => {
    try {
      const response = await Api.post(URL_PATHS.POST_INGRESSO, {
        email: email,
        assento: number
      });

      setDados(response.data);
      setErroMessage(null);
    } catch (error) {
      setErroMessage('Erro de ingresso');
      setDados(null);
    }
  };

  const numeros: number[] = Array.from({ length: 25 }, (_, index) => index + 1);

  return (
    <>
      {/* test api call
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          className="py-2 px-4 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Get simples
        </button>
      </form> */}
      <div>
        <form>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email:
            </label>
            <div>
              <input
                type="string"
                id="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Digite seu email"
                value={email || ''}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
        </form>
      </div>
      <div>
        <table>
          <tbody>
            {Array.from({ length: 5 }, (_, rowIndex) => (
              <tr key={rowIndex}>
                {Array.from({ length: 5 }, (_, colIndex) => {
                  const numero = rowIndex * 5 + colIndex + 1;
                  return (
                    <td key={colIndex}>
                      <button onClick={() => handleClick(numero)}>{numero}</button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-[300px] h-[200px] bg-gray-50 shadow-sm rounded-3xl py-4 px-6">
        <p className="text-3xl text-slate-700">Stock prices:</p>
        <div className="flex flex-col items-start justify-start mt-6 gap-2">
          {stockData.stock1Rate ? (
            <p>Stock 1: &#8377;{stockData.stock1Rate}</p>
          ) : null}
          {stockData.stock2Rate ? (
            <p>Stock 2: &#8377;{stockData.stock2Rate}</p>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
