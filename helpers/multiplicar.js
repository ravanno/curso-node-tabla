const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => { // ASYNC FUERZA UNA PROMESA
    try {
        let salida, consola = '';

        if (listar)
        {
            console.log('=================='.brightCyan);
            //console.log(` Tabla del: ${base}`);
            console.log(' ',colors.yellow('Tabla del:'), colors.grey(base));
            console.log('=================='.brightCyan);
        }
        
        for (let i = 1; i <= hasta; i++)
        {
            salida += `${base} ${'x'.green} ${i} ${'='.brightGreen} ${i*base}\n`;
            consola += `${base} x ${i} = ${i*base}\n`;
        }
        
        if (listar) console.log(consola);
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`.rainbow;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}