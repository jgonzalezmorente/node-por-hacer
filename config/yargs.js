const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea a eliminar'
}

let completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('listar', 'Muestra todas las tareas por hacer', {
        completado: {
            alias: 'c',
            desc: 'Filtra la tareas con el estado de completado indicado'
        }
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv


module.exports = {
    argv
}