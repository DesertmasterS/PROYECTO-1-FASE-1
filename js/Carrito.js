import platos from './json/platos.json' assert {type: 'json'};

let agregar = document.getElementById("agregar");

let car = document.getElementById('identificador');
var carrito = [];

agregar.addEventListener('click',function(event){
    platos.forEach(plato =>{
        
        if(event.target.getAttribute('data-id') == plato.id){
        
            carrito.push(plato.id)
            console.log(carrito);
            carrito.forEach(producto =>{
                let itemHTML = `
                <div class="Linea">
                    <div class="item2 Plato1">
                    <img src="${plato.imagen}" alt="Primer Producto" width="80px" >
                    </|div>
                    <div class="item2 Cantidad">
                        x
                        <div>
                            1
                        </div>
                    </div>
                    <div class="item2 texto">
                        <h6>${plato.nombre}</h6>
                    </div>
                    <div class="item2 Numero">
                        ${plato.precio}
                    </div>
                </div>
                `
                car.innerHTML += itemHTML;
                
                
            });
        }
    })
});

let contenedor = document.getElementById('identificador')
contenedor.appendChild(car);