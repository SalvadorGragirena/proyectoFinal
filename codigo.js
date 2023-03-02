
//Variables globales
let btnRopa = document.getElementById("btn_ropa");
let btnTelevisores = document.getElementById("btn_televisores");
let btnPerfumes = document.getElementById("btn_perfumes");
//Guarda_I_Perfumes
let btn_GuardaRopa = document.getElementById("Guarda_I_Ropa");
let btn_GuardaTelevisores = document.getElementById("Guarda_I_Televisores");
let btn_GuardaPerfumes = document.getElementById("Guarda_I_Perfumes");
//Recupera_I_Ropa
let btn_RecuperaRopa = document.getElementById("Recupera_I_Ropa");
let btn_RecuperaTelevisores = document.getElementById("Recupera_I_Televisores");
let btn_RecuperaPerfumes = document.getElementById("Recupera_I_Perfumes");
//Carrito
let btn_Carrito = document.getElementById("Carrito");

let entrada1 = document.getElementsByClassName("entrada1");
let entrada2 = document.getElementsByClassName("entrada2");
let entrada3 = document.getElementsByClassName("entrada3");

//Para cambio de texo p
let p_producto = document.getElementsByClassName("p_producto");

let h3_ropa = document.getElementById("totalropa");
let h3_televisores = document.getElementById("totaltelevisores");
let h3_perfumes = document.getElementById("totalperfumes");

let total_R
let total_T
let total_P

class producto {
    constructor(cantidad, precio, nombre) {
        this.cantidad = cantidad
        this.precio = precio
        this.nombre = nombre
    }
    total() {
        return this.cantidad * this.precio;
    }
    mod_cantidad(x) {
        this.cantidad = x;
    }
}

//Inicio

const ropa = [];
const televisores = [];
const perfumes = [];

fetch('./data.json')
    .then((response) => response.json())
    .then((json) => {
        for (let i = 0; i < 7; i++) {
            ropa.push(new producto(0, json.arrayProductos[i].precio, json.arrayProductos[i].nombre));
            televisores.push(new producto(0, json.arrayProductos[i+7].precio, json.arrayProductos[i+7].nombre));
            perfumes.push(new producto(0, json.arrayProductos[i+14].precio, json.arrayProductos[i+14].nombre));
            
            p_producto[i].innerText = json.arrayProductos[0].nombre;
            p_producto[i+7].innerText = json.arrayProductos[i+7].nombre;
            p_producto[i+14].innerText = json.arrayProductos[i+14].nombre;
        }
    });
    
     

function suma_R() {
    let aux = 0
    for (let i = 0; i < 7; i++) {
        aux = aux + ropa[i].total();
    }
    total_R = aux
    h3_ropa.innerText = 'Total en ropa seria: ' + total_R;
}

function suma_T() {
    let aux = 0
    for (let i = 0; i < 7; i++) {
        aux = aux + televisores[i].total();
    }
    total_T = aux
    h3_televisores.innerText = 'Total en televisores seria: ' + total_T;
}

function suma_P() {
    let aux = 0
    for (let i = 0; i < 7; i++) {
        aux = aux + perfumes[i].total();
    }
    total_P = aux
    h3_perfumes.innerText = 'Total en perfume seria: ' + total_P;
}

function entrada_R() {
    for (let i = 0; i < 7; i++) {
        ropa[i].mod_cantidad(entrada1[i].value);
    }
}

function entrada_T() {
    for (let i = 0; i < 7; i++) {
        televisores[i].mod_cantidad(entrada2[i].value);
    }
}

function entrada_P() {
    for (let i = 0; i < 7; i++) {
        perfumes[i].mod_cantidad(entrada3[i].value);
    }
}

btnRopa.addEventListener("click", () => suma_R());
btnTelevisores.addEventListener("click", () => suma_T());
btnPerfumes.addEventListener("click", () => suma_P());


for (let i = 0; i < entrada1.length; i++) {
    entrada1[i].addEventListener("change", () => entrada_R());
}
for (let i = 0; i < entrada2.length; i++) {
    entrada2[i].addEventListener("change", () => entrada_T());
}
for (let i = 0; i < entrada3.length; i++) {
    entrada3[i].addEventListener("change", () => entrada_P());
}

//Funciones para guardar en LocalStorages
function Guarda_Input_Ropa() {
    Swal.fire({
        title: '¿Quieres guardar inputs en Storage?',
        text: "Selecciona una opción",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, guardalo!',
        cancelButtonText: 'Cancelar!'
    }).then((result) => {
        if (result.isConfirmed) {
            const myJSON = JSON.stringify(ropa);
            localStorage.setItem("RopaJSON", myJSON);
            Swal.fire(
                'Guardado!',
                'Inputs Ropa en Storage',
                'success'
            )
        }
    })
}

function Guarda_Input_Televisores() {
    Swal.fire({
        title: '¿Quieres guardar inputs en Storage?',
        text: "Selecciona una opción",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, guardalo!',
        cancelButtonText: 'Cancelar!'
    }).then((result) => {
        if (result.isConfirmed) {
            const myJSON = JSON.stringify(televisores);
            localStorage.setItem("TelevisoresJSON", myJSON);
            Swal.fire(
                'Guardado!',
                'Inputs Televisores en Storage',
                'success'
            )
        }
    })
}

function Guarda_Input_Perfumes() {
    Swal.fire({
        title: '¿Quieres guardar inputs en Storage?',
        text: "Selecciona una opción",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, guardalo!',
        cancelButtonText: 'Cancelar!'
    }).then((result) => {
        if (result.isConfirmed) {
            const myJSON = JSON.stringify(perfumes);
            localStorage.setItem("PerfumesJSON", myJSON);
            Swal.fire(
                'Guardado!',
                'Inputs Perfumes en Storage',
                'success'
            )
        }
    })
}

//Funciones para Recuperar en LocalStorages
function Recupera_Input_Ropa() {
    Swal.fire({
        title: '¿Quieres recuperar inputs en Storage?',
        text: "Selecciona una opción",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, recupéralos!',
        cancelButtonText: 'Cancelar!'
    }).then((result) => {
        if (result.isConfirmed) {
            let textAux = localStorage.getItem("RopaJSON");
            let objAux = JSON.parse(textAux);
            for (let i = 0; i < 7; i++) {
                entrada1[i].value = objAux[i].cantidad;
                ropa[i].mod_cantidad(objAux[i].cantidad);
            }
            Swal.fire(
                'Recuperados!',
                'Inputs Ropa recuperados desde Storage',
                'success'
            )
        }
    })
}
function Recupera_Input_Televisores() {
    Swal.fire({
        title: '¿Quieres recuperar inputs en Storage?',
        text: "Selecciona una opción",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, recupéralos!',
        cancelButtonText: 'Cancelar!'
    }).then((result) => {
        if (result.isConfirmed) {
            let textAux = localStorage.getItem("TelevisoresJSON");
            let objAux = JSON.parse(textAux);
            for (let i = 0; i < 7; i++) {
                entrada2[i].value = objAux[i].cantidad;
                televisores[i].mod_cantidad(objAux[i].cantidad);
            }
            Swal.fire(
                'Recuperados!',
                'Inputs Televisores recuperados desde Storage',
                'success'
            )
        }
    })
}
function Recupera_Input_Perfumes() {
    Swal.fire({
        title: '¿Quieres recuperar inputs en Storage?',
        text: "Selecciona una opción",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, recupéralos!',
        cancelButtonText: 'Cancelar!'
    }).then((result) => {
        if (result.isConfirmed) {
            let textAux = localStorage.getItem("PerfumesJSON");
            let objAux = JSON.parse(textAux);
            for (let i = 0; i < 7; i++) {
                entrada3[i].value = objAux[i].cantidad;
                perfumes[i].mod_cantidad(objAux[i].cantidad);
            }
            Swal.fire(
                'Recuperados!',
                'Inputs Perfumes recuperados desde Storage',
                'success'
            )
        }
    })
}



btn_GuardaRopa.addEventListener("click", () => Guarda_Input_Ropa());
btn_GuardaTelevisores.addEventListener("click", () => Guarda_Input_Televisores());
btn_GuardaPerfumes.addEventListener("click", () => Guarda_Input_Perfumes());

btn_RecuperaRopa.addEventListener("click", () => Recupera_Input_Ropa());
btn_RecuperaTelevisores.addEventListener("click", () => Recupera_Input_Televisores());
btn_RecuperaPerfumes.addEventListener("click", () => Recupera_Input_Perfumes());


//Carrito

function VerCarrito() {
    const carro = [];
    let AuxTotal = 0;
    for (let i = 0; i < 7; i++) {
        if (ropa[i].cantidad > 0) {
            carro.push(new producto(ropa[i].cantidad, ropa[i].precio, ropa[i].nombre));
        }
    }
    for (let i = 0; i < 7; i++) {
        if (televisores[i].cantidad > 0) {
            carro.push(new producto(televisores[i].cantidad, televisores[i].precio, televisores[i].nombre));
        }
    }
    for (let i = 0; i < 7; i++) {
        if (perfumes[i].cantidad > 0) {
            carro.push(new producto(perfumes[i].cantidad, perfumes[i].precio, perfumes[i].nombre));
        }
    }

    Swal.fire({
        title: '¿Estás seguro de comprar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, cómpralo!',
        html:
            `<section>
            <table id="productos_carrito" border=1>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                </tr>
            </table>
            </section>
            <section id="section_2_Carrito"> 
                <p id="MensajeCarrito"></p>
                <strong id="TotalCarrito"></strong>
            </section>`
    }).then((result) => {
        if (result.isConfirmed) {
        carro.length > 0 ? Swal.fire('Comprado!','Tu compra ha sido exitosa!','success') : Swal.fire('No hay productos en carrito!','Compra no fue efectuada')
        }
    });

    let tablacarrito = document.getElementById('productos_carrito');
    let TotalCarrito = document.getElementById('TotalCarrito');
    let MensajeCarrito = document.getElementById('MensajeCarrito');
    let cuerpoTable = document.createElement('tbody');

    carro.forEach(p => {
        if (p.cantidad > 0) {
            let fila = document.createElement('tr');
            let td = document.createElement('td');

            td = document.createElement('td');
            td.innerText = p.nombre;
            fila.appendChild(td);

            td = document.createElement('td');
            td.innerText = p.cantidad;
            fila.appendChild(td);

            td = document.createElement('td');
            td.innerText = p.precio;
            fila.appendChild(td);

            cuerpoTable.appendChild(fila)
            AuxTotal = p.precio + AuxTotal
        }
        tablacarrito.appendChild(cuerpoTable);
    })            
        AuxTotal == 0 ? MensajeCarrito.innerText = 'No tiene productos en carrito' : MensajeCarrito.innerText = 'Precio total en productos: ';
        TotalCarrito.innerText = AuxTotal + "$";
}
    btn_Carrito.addEventListener("click", () => VerCarrito());
