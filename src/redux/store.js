import {createStore} from 'redux'
import {tareas as tareasJson} from '../tareas.json'


export const ELIMINAR_TAREA = 'ELIMINAR_TAREA'


const reducerTareas = (state, action) => {

    if (action.type === ELIMINAR_TAREA){

        return {
            ...state,
            tareas: state.tareas.filter(tarea => tarea.idTarea !== action.tarea.idTarea)

        }

    }

        return state

}

export default createStore(reducerTareas, {tareas: tareasJson })