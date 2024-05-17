import platos from './json/platos.json' assert {type: 'json'};

let agregar = document.getElementById("agregar");

let car = document.createElement('div');
car.classList.add("Linea");
var carrito = [];

agregar.addEventListener('click',function(event){
    platos.forEach(plato =>{
        if(event.target.getAttribute('data-id') == plato.id){
            carrito.push(plato.id)
            console.log(carrito);
            carrito.forEach(producto =>{
                let itemHTML = `
                    <div class="item2 Plato1">
                    <img src="${plato.imagen}" alt="Primer Producto" width="80px" >
                    </div>
                    <div class="item2 Cantidad">
                        <select class="number">
                            <option value="number">1</option>
                            <option value="number">2</option>
                            <option value="number">3</option>
                            <option value="number">4</option>
                            <option value="number">5</option>
                        </select>
                    </div>
                    <div class="item2 texto">
                        <h6>${plato.nombre}</h6>
                    </div>
                    <div class="item2 Numero">
                        ${plato.precio}
                    </div>
                    
                `
                car.innerHTML += itemHTML;
                
                
            });
        }
    })
});

let contenedor = document.getElementById('identificador')
contenedor.appendChild(car);