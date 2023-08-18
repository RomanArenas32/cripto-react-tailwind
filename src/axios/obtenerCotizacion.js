import axios from "axios"


export const obtenerCotizacion = async(moneda, cripto) => {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`
    const resp = await axios.get(url)
    const resultado = resp.data.DISPLAY[cripto][moneda];
    return resultado;
}
