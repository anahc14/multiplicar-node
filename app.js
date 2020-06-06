const argv = require('./config/yargs').argv;
const colors = require('colors');
// const fs = require('express'); // Express, paquete no nativo de node
// const fs = require('./path'); // Archivos creados por nosotros mismos,
//que están en algun lado del proyecto u ordenador
//destructuracion
const {
    crearArchivo,
    listarTabla
} = require('./multiplicar/multiplicacion');

const comando = argv._[0]

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');

}