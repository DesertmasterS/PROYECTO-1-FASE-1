import platos from './json/platos.json' assert {type: 'json'};



function getQueryParam(param) {
  let params = new URLSearchParams(window.location.search);
  return params.get(param);
}
let productId = getQueryParam('id');
console.log('ID del producto:', productId);

let HTMLcode = ``;

platos.forEach(plato =>{
  if (plato.id == productId){
    HTMLcode = `
<div class="PlatoPrincipal">
  <a href=". ."></a>
  <img src="${plato.imagen}" alt="Primer Producto" width="100%" height="200px" >
</div>
<div class="NomProducto">
  <h5>${plato.nombre}</h5>
</div>
<div class="Descripcion">
  <h6>${plato.descripcion}</h6>
</div>
<div class="CantidadCom">
  <h6>Cantidad</h6>
</div>
<div class="Linea1">     
  <select class="Cantidad" >
    <option value="number">1</option>
    <option value="number">2</option>
    <option value="number">3</option>
    <option value="number">4</option>
    <option value="number">5</option>
    <option value="number">6</option>
    <option value="number">7</option>
    <option value="number">8</option>
    <option value="number">9</option>
    <option value="number">10</option>
  </select>
</div>
<div class="Ingredientes">
  <h5>Agregar Ingredientes</h5>
</div>

`
for (var i = 0;i<plato.ingredientes.length;i++){
  HTMLcode += `
  <div class="Fila">
  <input type="checkbox">
  <h6>${plato.ingredientes[i]}</h6>
  </div>
  `
}
HTMLcode += `
<div class="Pago">
  <div class="SeguirCompra" id="agregar">
    <button type="ingresar" class="btn" data-id="${plato.id}">Agregar y seguir comprando</button>
  </div>
  <div class="Pagar">
    <div>
        <button type="Ingresar" class="btn" style="float: right;" id="${plato.id}">Pagar ahora &middot; $${plato.precio}</button>
    </div>     
  </div> 
</div>
`  
}});

let cont = document.createElement('div');
cont.classList.add('Contenedor');


cont.innerHTML = HTMLcode;

let con = document.getElementById("Con");
con.appendChild(cont)
