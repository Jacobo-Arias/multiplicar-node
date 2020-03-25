const options = {
    base: {
        demand: true,
        alias: 'b',
        description: 'La base de la tabla'
    },
    limite: {
        alias: 'l',
        default: 10,
        description: 'Límite de listar las tablas'
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', options)
    .command('crear', 'Guarda la tabla en un archivo txt', options)
    .help()
    .argv;


module.exports = {
    argv
}