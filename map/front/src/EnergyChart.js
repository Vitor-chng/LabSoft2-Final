import React, { useEffect, useState } from 'react';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import "chart.js/auto";

import { Line } from "react-chartjs-2";

const EnergyChart = ({dataPessoas,dataEnergia}) => {
    // const [chartData, setChartData] = useState({});

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('http://localhost:3001/consumo');
    //             const data = await response.json();
    //             setChartData({
    //                 labels: data.map(item => new Date(item.timestamp).toLocaleDateString()),
    //                 datasets: [
    //                     {
    //                         label: 'Consumo de Energia',
    //                         data: data.map(item => item.valor),
    //                         borderColor: 'rgb(75, 192, 192)',
    //                         tension: 0.1
    //                     }
    //                 ]
    //             });
    //         } catch (error) {
    //             console.error('Erro ao buscar dados:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);


    const data = {
        labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",  "21", "22", "23"],
        datasets: [
          {
            label: "Energia",
            data: dataEnergia, // quebrado para ver descomente o teste
            // teste 
            // data: [101,10,1,1,1,40,315,2100,2120,1901,1010,70,401,510,45,601,2100,220,190,70,30,20,15],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
          },
          {
            label: "Pessoas",
            data: dataPessoas,
            fill: false,
            borderColor: "#742774"
          }
        ]
      };

      const dataEnergia2 = [
        dataPessoas[0]/dataEnergia[0],
        dataPessoas[1]/dataEnergia[1],
        dataPessoas[2]/dataEnergia[2],
        dataPessoas[3]/dataEnergia[3],
        dataPessoas[4]/dataEnergia[4],
        dataPessoas[5]/dataEnergia[5],
        dataPessoas[6]/dataEnergia[6],
        dataPessoas[7]/dataEnergia[7],
        dataPessoas[8]/dataEnergia[8],
        dataPessoas[9]/dataEnergia[9],
        dataPessoas[10]/dataEnergia[10],
        dataPessoas[11]/dataEnergia[11],
        dataPessoas[12]/dataEnergia[12],
        dataPessoas[13]/dataEnergia[13],
        dataPessoas[14]/dataEnergia[14],
        dataPessoas[15]/dataEnergia[15],
        dataPessoas[16]/dataEnergia[16],
        dataPessoas[17]/dataEnergia[17],
        dataPessoas[18]/dataEnergia[18],
        dataPessoas[19]/dataEnergia[19],
        dataPessoas[20]/dataEnergia[20],
        dataPessoas[21]/dataEnergia[21],
        dataPessoas[22]/dataEnergia[22],
        dataPessoas[23]/dataEnergia[23],
      ]
      const data2 = {
        labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",  "21", "22", "23"],
        datasets: [
          {
            label: "Energia",
            data: dataEnergia2, // quebrado para ver descomente o teste
            // teste 
            //data: [101,10,1,1,1,40,315,2100,2120,1901,1010,70,401,510,45,601,2100,220,190,70,30,20,15],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
          },
        ]
      };

    return (
        <div>
            <h2>Consumo de Energia e Trafego de Pessoas</h2>
            <Line data={data} />
            <h2>Consumo x Pessoa</h2>
            <Line data={data2} />
        </div>
    );
};

export default EnergyChart;
