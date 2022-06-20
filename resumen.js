let enero = {
    ingreso: 0,
    gasto: 0
};
let febrero = {
    ingreso: 0,
    gasto: 0
};
let marzo = {
    ingreso: 0,
    gasto: 0
};
let abril = {
    ingreso: 0,
    gasto: 0
};
let mayo = {
    ingreso: 0,
    gasto: 0
};
let junio = {
    ingreso: 0,
    gasto: 0
};
let julio = {
    ingreso: 0,
    gasto: 0
};
let agosto = {
    ingreso: 0,
    gasto: 0
};
let septiembre = {
    ingreso: 0,
    gasto: 0
};
let octubre = {
    ingreso: 0,
    gasto: 0
};
let noviembre = {
    ingreso: 0,
    gasto: 0
};
let diciembre = {
    ingreso: 0,
    gasto: 0
};


console.log(`${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`)

const resumen = (ingreso, gasto) => {
    const fecha = new Date();
    const mes = fecha.getMonth() + 1;

    switch(mes) {
        case mes == 1: {
            if(ingreso > 0) {
                enero.ingreso += ingreso;
            }
            enero.gasto += gasto;
        }
    }
}