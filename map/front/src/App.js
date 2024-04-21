import logo from './logo.svg';
import './App.css';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
import EnergyChart from './EnergyChart';

function App() {

  const mockData = 
    // quantad pessoas passam pelo onibus a cada hora do dia (comeca 0h)
    [20,0,0,0,0,78,89,379,400,330,150,90,70,50,55,97,300,470,425,150,70,40,25]
 



  return (
    <div className="App">
      <header className="App-header">
        <h1>Dashboard de Energia</h1>
      </header>
      <Get url="http://localhost:3001/consumo" >
        {(error, response, isLoading, makeRequest, axios) => {
          if(error) {
            return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
          }
          else if(isLoading) {
            return (<div>Loading...</div>)
          }
          else if(response !== null) {
            //console.log(response.data)
            //console.log(response.data[3]["consumo_ativo_acumulado_total"]-response.data[0]["consumo_ativo_acumulado_total"])
            const dataEnergia = [
              response.data[3]["consumo_ativo_acumulado_total"]-response.data[0]["consumo_ativo_acumulado_total"],
              response.data[7]["consumo_ativo_acumulado_total"]-response.data[4]["consumo_ativo_acumulado_total"],
              response.data[11]["consumo_ativo_acumulado_total"]-response.data[8]["consumo_ativo_acumulado_total"],
              response.data[15]["consumo_ativo_acumulado_total"]-response.data[12]["consumo_ativo_acumulado_total"],
              response.data[19]["consumo_ativo_acumulado_total"]-response.data[16]["consumo_ativo_acumulado_total"],
              response.data[23]["consumo_ativo_acumulado_total"]-response.data[20]["consumo_ativo_acumulado_total"],
              response.data[27]["consumo_ativo_acumulado_total"]-response.data[24]["consumo_ativo_acumulado_total"],
              response.data[31]["consumo_ativo_acumulado_total"]-response.data[28]["consumo_ativo_acumulado_total"],
              response.data[35]["consumo_ativo_acumulado_total"]-response.data[32]["consumo_ativo_acumulado_total"],
              response.data[39]["consumo_ativo_acumulado_total"]-response.data[36]["consumo_ativo_acumulado_total"],   
              response.data[43]["consumo_ativo_acumulado_total"]-response.data[40]["consumo_ativo_acumulado_total"],   
              response.data[47]["consumo_ativo_acumulado_total"]-response.data[44]["consumo_ativo_acumulado_total"],
              response.data[51]["consumo_ativo_acumulado_total"]-response.data[48]["consumo_ativo_acumulado_total"],
              response.data[55]["consumo_ativo_acumulado_total"]-response.data[52]["consumo_ativo_acumulado_total"],
              response.data[59]["consumo_ativo_acumulado_total"]-response.data[56]["consumo_ativo_acumulado_total"],
              response.data[63]["consumo_ativo_acumulado_total"]-response.data[60]["consumo_ativo_acumulado_total"],
              response.data[67]["consumo_ativo_acumulado_total"]-response.data[64]["consumo_ativo_acumulado_total"],
              response.data[71]["consumo_ativo_acumulado_total"]-response.data[68]["consumo_ativo_acumulado_total"],
              response.data[75]["consumo_ativo_acumulado_total"]-response.data[72]["consumo_ativo_acumulado_total"],
              response.data[79]["consumo_ativo_acumulado_total"]-response.data[76]["consumo_ativo_acumulado_total"],
              response.data[83]["consumo_ativo_acumulado_total"]-response.data[80]["consumo_ativo_acumulado_total"],
              response.data[87]["consumo_ativo_acumulado_total"]-response.data[84]["consumo_ativo_acumulado_total"],
              response.data[91]["consumo_ativo_acumulado_total"]-response.data[88]["consumo_ativo_acumulado_total"],
              response.data[95]["consumo_ativo_acumulado_total"]-response.data[92]["consumo_ativo_acumulado_total"],
            ]
            console.log(dataEnergia)
            return (
              <EnergyChart
              dataEnergia = {dataEnergia}
              dataPessoas = {mockData}
              />)
          }
          return (<div>Default message before request is made.</div>)
        }}
      </Get>
    </div>
  );
}

export default App;
