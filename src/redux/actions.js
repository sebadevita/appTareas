import { ELIMINAR_TAREA } from "./store"


export function eliminarTarea(tarea){
    return {
        type: ELIMINAR_TAREA,
        tarea,
    }
}