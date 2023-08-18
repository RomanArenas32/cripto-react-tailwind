import axios from "axios"

const url = `https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=20&tsym=USD`

export const top = async() => {
  const {data} = await axios.get(url)
    const resp = data.Data;
    return resp;

}
