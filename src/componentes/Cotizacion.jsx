
export const Cotizacion = ({ cotizacion }) => {

  return (
   
      <div className=" bg-white bg-opacity-80 p-10 rounded shadow text-red-700">
        <hr />
        <h3 className="text-lg ">PRECIO ACTUAL: {cotizacion.PRICE}</h3>
        <hr />
        <h3 className="mt-2 text-lg ">ÚLTIMAS 24 HORAS: {cotizacion.CHANGE24HOUR}</h3>
        <hr />
        <h3 className="mt-2 "><span>PRECIO MÁS ALTO DEL DÍA:</span>  {cotizacion.HIGHDAY}</h3>
        <hr />
        <h3 className="mt-1"><span>ÚLTIMA ACTUALIZACIÓN:</span> {cotizacion.LASTUPDATE}</h3>
        <hr />

    </div>
  )
}
