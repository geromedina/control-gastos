import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({ 
  gastos, 
  setGastoEditar, 
  eliminarGasto,
  filtro,
  gastosFiltrados
}) => {
  return (
    <div className='listado-gastos contenedor'>
        

        { filtro ? (
            <>
                <h2>{gastosFiltrados.length ? 'Gastos' : 'No hay en esta categoria'}</h2>
                {gastosFiltrados.map(gasto => (
                <Gasto 
                setGastoEditar={setGastoEditar}
                key={gasto.id}
                gasto={gasto}
                eliminarGasto={eliminarGasto}
                />
            ))}
          </>
          ) : (
            <>
                <h2>{gastos.length ? 'Gastos' : 'No hay Gastos Aun'}</h2>
                {gastos.map(gasto => (
                <Gasto 
                setGastoEditar={setGastoEditar}
                key={gasto.id}
                gasto={gasto}
                eliminarGasto={eliminarGasto}
    
                />
            ))}
          </>
          )
        }
    </div>
  )
}

export default ListadoGastos;