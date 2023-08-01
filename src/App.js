import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';

function App() {

  const [donations, setDonations] = useState({})

  function getDonations(text) {
    const lines = text.split('\n')
    const linesSplitted = []
    for(var i = 0;i < lines.length;i++){
        const lineSplitted = lines[i].split('\t')
        if (lineSplitted[3] === 'Donativo') linesSplitted.push({
          name: lineSplitted[0],
          value: lineSplitted[2],
          date: lineSplitted[4]
        })
    }
    const donations = {}
    linesSplitted.map(line => {
      const value = line.value.replaceAll('.', '')
      if (!donations[line.name]) {
        donations[line.name] = {
          value: parseFloat(value)
        }
      } else {
        donations[line.name].value += parseFloat(value)
      }
    })
    setDonations(donations)
  }

  return (
    <>
      <textarea placeholder="Cole as doações aqui" onChange={(e) => getDonations(e.target.value)}></textarea>
    
      <table>
        <tr>
          <th>Nome</th>
          <th>Valor</th>
        </tr>
        {Object.keys(donations).length && Object.keys(donations).map(key => {
        {console.log('Works', donations)}
          return <tr>
          <td>{key}</td>
          <td>{donations[key].value}</td>
        </tr>
        })}
      </table>
    </>
  );
}

export default App;
