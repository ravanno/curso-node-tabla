const { crearArchivo } = require('./helpers/multiplicar')
const argv  = require('./config/yargs.js');

// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 10 = 50

console.clear();

//console.log(process.argv);
//console.log(argv);
//console.log('base: yargs', argv.base);

// console.log(process.argv); // Agumentos linea de comandos
// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base = 5] = arg3.split('=');
// console.log(base);



//const base = 5;

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));