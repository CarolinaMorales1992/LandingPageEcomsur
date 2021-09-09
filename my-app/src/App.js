import './App.css';
import { get } from 'axios';
import React, {useState} from 'react';



function App() {
  const [capital, setCapital] = useState('');
  const [bandera, setBandera] = useState('');
  const [nombre, setNombre] = useState('');
  const [region, setRegion] = useState('');
  const [paisesLimitrofes, setPaisesLimitrofes] = useState('');
  const [lengua, setLengua] = useState('');
  const [moneda, setMoneda] = useState('');

  const searchCountry = (e) => {
    e.preventDefault();
    let searchButton = document.getElementById('inputSearch').value;
    get('https://restcountries.eu/rest/v2/name/' + searchButton)
    .then(response => {
      setCapital(response.data[0].capital);
      setBandera(response.data[0].flag);
      setNombre(response.data[0].name);
      setRegion(response.data[0].region);
      setPaisesLimitrofes(response.data[0].borders.map(border => border + ', '));
      setLengua(response.data[0].languages[0].name);
      setMoneda(response.data[0].currencies[0].name + ' ' + response.data[0].currencies[0].symbol);

      
    });
  }
  
  return (
    <div className="App">
      <form id="form"> 
        <input type="search" id="inputSearch" placeholder="Search..."/>
        <button id="search" onClick = {searchCountry}>Search</button>
      </form>

      <div id="data">
        <div>Capital: {capital}</div>
        <div>Bandera: <img width="30" height="15" src={bandera}></img></div>
        <div>Nombre: {nombre}</div>
        <div>Región: {region}</div>
        <div>Países limítrofes: {paisesLimitrofes}</div>
        <div>Lengua: {lengua}</div>
        <div>Nombre y símbolo de moneda: {moneda}</div>

      </div>
    </div>
  );
}

export default App;
