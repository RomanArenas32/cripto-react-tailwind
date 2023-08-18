import { Contenedor } from "./componentes/Contenedor"
import { Encabezado } from "./componentes/Encabezado"
import {PiePagina} from "./componentes/PiePagina"

export const App = () => {
  return (
    <div>
      <Encabezado/>
      <Contenedor/>
      <PiePagina/>
    </div>
  )
}
