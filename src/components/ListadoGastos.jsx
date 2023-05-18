import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({ gastos, setGastoEditar, eliminarGasto }) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{gastos.length ? 'Gastos' : 'No hay Gastos Aun'}</h2>

        {gastos.map(gasto => (
            <Gasto 
            setGastoEditar={setGastoEditar}
            key={gasto.id}
            gasto={gasto}
            eliminarGasto={eliminarGasto}

            />
        ))}
    </div>
  )
}

export default ListadoGastos;