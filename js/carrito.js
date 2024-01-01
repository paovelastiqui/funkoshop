// const add = document.querySelector('#add');
// const subtract = document.querySelector('#subtract');
// const quantity = document.querySelector('#quantity');

// add.addEventListener('click', () => quantity.value = Number(quantity.value) + 1);
// subtract.addEventListener('click', () => {
//     (quantity.value = Math.max(0, Number(quantity.value) - 1));
// });

// function precioSubtotalItem() {
//     var cantidad = document.getElementById('quantity').value;
//     var precioUnitario = 1799.99;
//     var subtotalItem = cantidad * precioUnitario;

//     // Muestra el resultado en el elemento con id 'resultado'
//     document.getElementById('precioItem').innerHTML = '$ ' + subtotalItem;
//   }

// precioSubtotalItem();

let botonSuma=document.getElementById("cantidad-controles__sumar");
let botonResta=document.getElementById("cantidad-controles__restar");

function addItem() {
    valor = document.getElementById("input-cant");
    valor.value ++;
    calcularPrecio();
    calcularSubtotal();
    cantidadElementos();
    calcularTotal();
} 
    
function removeItem() {
    valor = document.getElementById("input-cant");
    if (valor.value > 1)valor.value --;
    calcularPrecio();
    calcularSubtotal();
    cantidadElementos();
    calcularTotal(); }

function calcularPrecio(){
    valor = document.getElementById("input-cant").value * 1799.99
    document.getElementById("precio-totalItem").textContent = valor; }

function calcularSubtotal(){
    subtotales=  parseFloat (document.getElementById("precio-totalItem").textContent);
    document.getElementById("subtotal").textContent = subtotales; }
     

function calcularTotal(){
    total =  parseFloat(document.getElementById("subtotal").textContent);
    document.getElementById("precio-total").textContent = ('$ ' + total); }


function cantidadElementos(){
    cantElemts = parseInt (document.getElementById("input-cant").value);
    document.getElementById("cant-elementos").textContent = cantElemts; }

    
botonSuma.onclick=addItem;
botonResta.onclick=removeItem;