import React, { useEffect, useState } from 'react';
import Api from '../services/api';


function App() {
  const [emailPaciente, setEmailPaciente] = useState('');

  const [dados, setDados] = useState<any | null >(null);
  const [erroMessage, setErroMessage] = useState<string | null>(null);

  // console.log(user, process.env.NODE_ENV)

  // const urlParams = new URLSearchParams(window.location.search);
  // const customToken = urlParams.get('token') ?? ''

  // useEffect(() => {
  //   if (customToken) {
  //     signInWithCustomToken(auth, customToken).then((user) => {
  //       console.log('aqui', user)
  //       if (user) {
  //         console.log("Usuário logado:", user);
  //         setUser(user);
  //       }
  //     })
  //   }

  // }, []);

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
      setErroMessage('Ocorreu um erro ao buscar os exames. Por favor, tente novamente.');
      setDados(null);
    }
  };

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
    </>
  );
}

export default App;
