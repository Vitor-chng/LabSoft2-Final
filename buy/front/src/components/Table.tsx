import React from 'react';

const TableComponent: React.FC = () => {
  // Função para lidar com o clique no botão
  const handleClick = (number: number) => {
    console.log(`Botão ${number} clicado`);
    // Coloque aqui o que você gostaria de fazer com o número clicado
  };

  // Cria um array 5x5 com números de 1 a 25
  const numeros: number[] = Array.from({ length: 25 }, (_, index) => index + 1);

  return (
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
  );
};

export default TableComponent;