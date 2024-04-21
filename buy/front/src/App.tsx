import React, {useEffect, useState} from 'react';
import Routes from './routes';


function App() {
  // const [user, setUser] = useState<any | null >(null);

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
  return (
    <>
    {/* <Routes /> */}
    Hello world
    </>
  );
}

export default App;
