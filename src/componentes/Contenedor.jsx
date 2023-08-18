
import { useEffect, useState } from "react";
import { top } from "../axios/top";
import { Titulo } from "./utilidades/Titulo";
import { obtenerCotizacion } from "../axios/obtenerCotizacion";
import { Cotizacion } from "./Cotizacion";

export const Contenedor = () => {
  const [criptomonedas, setCriptomonedas] = useState([]); //resultado de la peticion al top de criptos
  const [moneda, setMoneda] = useState("");
  const [cripto, setCripto] = useState("");
  const [cotizacion, setCotizacion] = useState("");

  useEffect(() => {
    top().then(result => {
      setCriptomonedas(result);
    });
  }, []);

  const cotizar = async () => {
    const respuesta = await obtenerCotizacion(moneda, cripto);
    setCotizacion(respuesta)
  }

  return (
    <>
      <Titulo />
      <div className="contenedor-cripto bg-gray-200 bg-opacity-50 flex flex-col items-center justify-center mt-4 p-4 space-y-4">
        <select
          name=""
          id="moneda"
          className="bg-white bg-opacity-70 p-2 rounded-md"
          onChange={(e) => setMoneda(e.target.value)}
        >
          <option value="" defaultValue>Elige tu moneda</option>
          <option value="USD">Dólar estadounidense</option>
          <option value="ARS">Peso Argentino</option>
          <option value="MXN">Peso Mexicano</option>
          <option value="EUR">Euro</option>
          <option value="GBP">Libra Esterlina</option>
          <option value="JPY">Yen Japonés</option>
          <option value="CAD">Dólar Canadiense</option>
          <option value="AUD">Dólar Australiano</option>
        </select>
        <select
          name=""
          id="cripto"
          className="bg-white bg-opacity-70 p-2 rounded-md"
          onChange={e => setCripto(e.target.value)}
        >
        <option value="" defaultValue>Elige una criptomoneda</option>
          {criptomonedas.map(cripto => (
            <option value={cripto.CoinInfo.Name} key={cripto.CoinInfo.Name}>{cripto.CoinInfo.FullName}</option>
          ))}
        </select>
        <button onClick={cotizar} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          OBTENER
        </button>
        <Cotizacion cotizacion={cotizacion} />
      </div>

    </>
  );
};
