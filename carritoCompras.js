let totalProd = 0;
let totalPre = 0;
const producsAgreg = [];

    function agregarAlCarrito(nombre, precio) {
      totalProd++;
      totalPre += precio;
      producsAgreg.push(nombre);

      document.getElementById("total-prod").textContent = totalProd;
      document.getElementById("total-pre").textContent = totalPre;

      console.log("Productos en el carrito:", producsAgreg);

      if (totalPre > 50) {
        alert("Envío gratis aplicado");
      }
    }

    function vaciarCarrito() {
      totalProd = 0;
      totalPre = 0;
      producsAgreg.length = 0;

      document.getElementById("total-prod").textContent = totalProd;
      document.getElementById("total-pre").textContent = totalPre;

      alert("Carrito vacio");
    }