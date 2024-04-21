import React, { useEffect, useState } from 'react';
import Api from './services/api';
import { URL_PATHS } from './services/apiPaths';


function App() {
  const [email, setEmail] = useState('');
  

  const [dados, setDados] = useState<any | null>(null);
  const [erroMessage, setErroMessage] = useState<string | null>(null);

  // console.log(user, process.env.NODE_ENV)

  // const urlParams = new URLSearchParams(window.location.search);
  // const customToken = urlParams.get('token') ?? ''

  useEffect(() => {

  }, []);

  //  if (!user && process.env.NODE_ENV === 'production') {
  //    return <div>Carregando...</div>;
  //  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await Api.get(URL_PATHS.GET_USER, {
        // params: {
        //   email: emailPaciente,
        // },
      });

      setDados(response.data);
      setErroMessage(null);
    } catch (error) {
      setErroMessage('Erro de usuario');
      setDados(null);
    }
  };

  const handlePost = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e)
    try {
      const response = await Api.get(URL_PATHS.GET_USER, {
        params: {
          email: emailPaciente,
          assento: 2
        },
      });

      setDados(response.data);
      setErroMessage(null);
    } catch (error) {
      setErroMessage('Erro de ingresso');
      setDados(null);
    }
  };

  const arrayCom25Elementos: number[] = Array.from({ length: 25 }, (_, index) => index + 1);

  return (
    <>
      test api call
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          className="py-2 px-4 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Get simples
        </button>
      </form>
      <div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email
          </label>
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
      <div>
        <table>
          <thead>
            <tr>
              <th>Header 1</th>
              <th>Header 2</th>
              <th>Header 3</th>
              <th>Header 4</th>
              <th>Header 5</th>
            </tr>
          </thead>
          <tbody>
            {arrayCom25Elementos.map((item, index) => (
              <tr key={index}>
                <td>{
                  <form onSubmit={handlePost()}>
                    <button
                      type="submit"
                      className="py-2 px-4 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                    >
                      Get simples
                    </button>
                  </form>
                }</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
