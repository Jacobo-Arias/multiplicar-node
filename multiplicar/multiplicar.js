const fs = require("fs");
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('======================='.green);
    console.log(`==Tabla de ${base} hasta ${limite}==`.green);
    console.log('======================='.green);

    for (let index = 1; index <= limite; index++) {
        console.log(`${base} * ${index} = ${base*index}`);
    }
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido '${base}' no es un número`);
            return
        }

        let data = '';
        for (let index = 1; index <= limite; index++)
            data += (`${ base } * ${ index } = ${ 2*index }\n`);



        fs.writeFile(`tablas/tabla-${base}-hasta-el-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}-hasta-el-${limite}.txt`.green)
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}